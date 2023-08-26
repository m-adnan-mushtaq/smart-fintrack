import { Redis } from "ioredis";
import { env } from "../config";

class RedisSingleton {
  private static instance: Redis | null = null;

  private constructor() {}

  static getInstance(): Redis {
    if (!RedisSingleton.instance) {
      RedisSingleton.instance = new Redis({
        port: parseInt(env.REDIS_LOCAL_PORT),
        host: env.REDIS_LCOAL_HOST,
      });
    }
    RedisSingleton.instance.on("connect", () => {
      console.log("redis service is connceted!");
    });
    RedisSingleton.instance.on("error", (error) => {
      console.log("REDIS ERROR => ", error.message);
    });
    return RedisSingleton.instance;
  }
}

export const redis = RedisSingleton.getInstance();
