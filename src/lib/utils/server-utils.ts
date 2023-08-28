import { headers } from "next/headers";
import { FetchOptions } from "../types";
import { Prisma } from "@prisma/client";
import { randomUUID } from "crypto";

export async function getServerFetch(url: string, options: FetchOptions) {
  //for making api requests
  const headrs = headers();
  const cookie = headrs.get("cookie");
  // console.log(headeres.get("cookie"));
  const response = await fetch(url, {
    next: options,
    cache: "force-cache",
    headers: {
      cookie: cookie!,
    },
  });
  if (!response.ok || response.status >= 310) throw Error(response.statusText);
  return response.json();
}
export async function getStaticFetch(url: string, options: FetchOptions) {
  const response = await fetch(url, {
    next: options,
    cache: "force-cache",
  });
  if (!response.ok || response.status >= 310) throw Error(response.statusText);
  return response.json();
}

export const prepareInvalideKey=(model:Prisma.ModelName,key:string)=>{
  return `${key}-${model}`
}
export const prepareFindCacheKey = (
  args: any,
  model: Prisma.ModelName
): {
  hKey: string;
  hField: string;
} => {
  let hKey = "";
  if (model === "User") {
    hKey = args.where.email ?? args.where.id ?? randomUUID();
  } else {
    hKey = args.where?.user?.id ?? randomUUID();
  }
  const flattenArgs = flattenObject(args);
  const hField = joinObject(flattenArgs);
  hKey=`${hKey}-${model}`
  return { hKey, hField };
};

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
