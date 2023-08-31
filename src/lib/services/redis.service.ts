import { Redis } from "ioredis";
import { env } from "../config";
import { logger } from "./logger.service";

export class RedisService {
  private static instance: Redis | null = null;

  private constructor() {}
  static connected: boolean = false;
  static getInstance(): Redis {
    if (!RedisService.instance) {
      RedisService.instance = new Redis({
        port: parseInt(env.REDIS_LOCAL_PORT),
        host: env.REDIS_LCOAL_HOST,
      });
      console.log("new redis instance is created....");

      RedisService.instance.on("connect", () => {
        logger.info("redis service is connceted!");
        RedisService.connected = true;
      });
      RedisService.instance.on("error", (error) => {
        RedisService.connected = false;
        logger.error("REDIS ERROR => ", error.message);
      });
    }

    return RedisService.instance;
  }
}

export const redis = RedisService.getInstance();
