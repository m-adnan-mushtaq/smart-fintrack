import { createLogger, transports, format} from "winston";
import type { Logger } from "winston";
const { combine, timestamp, label, printf, colorize} = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level.toUpperCase()}: ${message}`;
});
class LoggerService {
  //pirvate methods and properites
  private static instance: Logger | null = null;
  //public
  public static getInstance(): Logger {
    if (!LoggerService.instance) {
      LoggerService.instance = createLogger({
        format: combine(
          label({ label:"SERVER" }),
          timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
          colorize({all:true}),
          myFormat,
        ),
        transports: [
          new transports.Console(),
          new transports.File({
            filename: "../logs/error.log",
            level: "error",
            maxsize:5242880, //5mb
          }),
        ],
        defaultMeta: {
          service: "smart-fintrack",
        },
      });
    }
    return LoggerService.instance;
  }
}

export const logger = LoggerService.getInstance();
