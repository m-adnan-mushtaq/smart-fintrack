import { ActionResponse} from "../types";
import { Prisma } from "@prisma/client";
import { randomUUID } from "crypto";
import { logger } from "../services";

/***********************************/
/* FILE CONTAINS HELPER FUNCTION FOR SERVER ACTIONS*/
/***********************************/
/**
 * 
 * @param model 
 * @param key 
 * @returns prepare invalida key for invalidating cache
 */
export const prepareInvalideKey = (model: Prisma.ModelName, key: string) => {
  return `${key}-${model}`;
};

/**
 * 
 * @param args 
 * @param model 
 * @returns prepare proper cache key for storing cache in redis
 */
export const prepareFindCacheKey = (
  args: any,
  model: Prisma.ModelName
): {
  hKey: string;
  hField: string;
} => {
  let hKey = "";
  if (model === "User") {
    hKey = args.where.email
      ? args.where.email
      : args.where.id
      ? args.where.id
      : randomUUID();
  } else {
    hKey = args.where?.user?.id ?? randomUUID();
  }
  const flattenArgs = flattenObject(args);
  const hField = joinObject(flattenArgs);
  hKey = `${hKey}-${model}`;
  return { hKey, hField };
};

/**
 * 
 * @param model 
 * @returns cache time depending upon type of model
 */
export const prepareCacheTime = (model: Prisma.ModelName): number => {
  let cache_time = 1800;
  if (model === "User") {
    cache_time = 3600 * 24;
  }
  return cache_time;
};

function flattenObject(obj: GenericObject, parentKey: string = "") {
  let result: GenericObject = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let newKey = parentKey ? `${parentKey}-${key}` : key;

      if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        let nestedResult = flattenObject(obj[key], newKey);
        result = { ...result, ...nestedResult };
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}

function joinObject(obj: GenericObject) {
  return Object.keys(obj)
    .map((key) => `${key}-${obj[key]}`)
    .join("-");
}

/**
 * 
 * @param error 
 * @returns action response containing apporpriate error message
 */
export function reformActionErrorHelper(error: any): ActionResponse {
  let message = error;
  if (error instanceof Error) {
    message = error.message;
  }
  logger.error(message)
  return {
    success: false,
    message,
  };
}


