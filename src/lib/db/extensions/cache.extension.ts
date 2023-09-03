import { Prisma } from "@prisma/client";
import { cacheMethods } from "@/lib/common/server-common";
import { RedisService, logger, redis } from "@/lib/services";
import {
  prepareCacheTime,
  prepareFindCacheKey,
} from "@/lib/utils/server-utils";

export default Prisma.defineExtension((client) => {
  return client.$extends({
    name: "cache-extension",
    model: {
      $allModels: {
        invalidateCache: async (keys: string[]) => {
          try {
            const pipeline=redis.pipeline()
            keys.forEach((key) => {
              pipeline.del(key)
              logger.info(`CACHE IS INVALIDATE AT ${key}`);
            });
            await pipeline.exec()
          } catch (error) {
            if (error instanceof Error) {
              logger.error(
                `ERROR WHILE INVALIDATING PIEPLINE ${error.message}`
              );
            }
          }
        },
      },
    },
    query: {
      $allModels: {
        $allOperations: async ({ query, args, model, operation }) => {
          try {
            const excludeModels: Prisma.ModelName[] = ["ActivityLog"];
            const queryResult = await query(args);

            if (
              excludeModels.includes(model) ||
              !RedisService.connected ||
              !queryResult
            ) {
              return queryResult;
            }

            //read cache or hit cache
            if (
              cacheMethods.includes(operation) &&
              typeof queryResult !== "undefined"
            ) {
              const { hKey, hField } = prepareFindCacheKey(args, model);
              const cacheHit = await redis.hget(hKey, hField);
              if (cacheHit) {
                logger.info(`CACHE HIT : ${hKey}`);
                return JSON.parse(cacheHit);
              }

              const cacheTime = prepareCacheTime(model);
              await redis.hsetnx(hKey, hField, JSON.stringify(queryResult));
              await redis.expire(hKey, cacheTime);
              logger.warn(`CACHE MISS : ${hKey}`);
              return queryResult;
            }

            return queryResult;
          } catch (error) {
            if (error instanceof Error) {
              logger.error(`cache layer error occured ${error.message}`);
            }
            throw Error("cache middleware error");
          }
        },
      },
    },
  });
});
