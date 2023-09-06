import Pusher from "pusher";
import { env } from "../config/env.config";

class PusherService {
  private static pusher: Pusher | null;
  private constructor() {}
  
  static getInstance(): Pusher {
    if (!PusherService.pusher) {
      PusherService.pusher = new Pusher({
        appId: env.PUSHER_APPID,
        secret: env.PUSHER_SECRET,
        key: env.PUSHER_KEY,
        cluster: env.PUSHER_CLUSTER,
        useTLS: true,
      });
    }
    return PusherService.pusher;
  }
}

export const pusher = PusherService.getInstance();
