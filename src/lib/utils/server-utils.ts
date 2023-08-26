import { headers } from "next/headers";
import { FetchOptions } from "../types";

export async function getRequestHelper(url: string, options: FetchOptions) {
  const headrs=headers()
  const cookie=headrs.get("cookie")
  // console.log(headeres.get("cookie"));
  const response = await fetch(url, {
    next: options,
    cache:"force-cache",
    headers:{
      "cookie":cookie!
    }
  });
  if (!response.ok || response.status >= 310) throw Error(response.statusText);
  return response.json();
}
