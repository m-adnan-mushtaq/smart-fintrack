import * as log4js from "log4js";
import type { Logger } from "log4js";

class LoggerService {
  //pirvate methods and properites
  private static instance: Logger | null = null;
  //public
  public static getInstance(): Logger {
    if (!LoggerService.instance) {
      log4js.configure({
        appenders: {
          console: { type: "console", layout: { type: "coloured" } },
          fileLogs: {
            type: "file",
            filename: "../logs/error.log",
            maxLogSize: "10M",
          },
        },
        categories: {
          default: { appenders: ["console"], level: "debug" },
          "default.fileLogs": { appenders: ["fileLogs"], level: "error" },
        },
      });
      if (process.env.NODE_ENV === "production") {
        LoggerService.instance = log4js.getLogger("default.fileLogs");
      } else {
        LoggerService.instance = log4js.getLogger();
      }
    }
    return LoggerService.instance;
  }
}

export const logger = LoggerService.getInstance();
