import { Redis } from "ioredis";
import { env } from "../config";

const redis = new Redis({
  port: env.REDIS_LOCAL_PORT,
  host: env.REDIS_LCOAL_HOST,
});

redis.on("connect", () => {
  console.log("redis service is connceted!");
});
redis.on("error", (error) => {
  console.log("REDIS ERROR => ", error.message);
});
export { redis };
