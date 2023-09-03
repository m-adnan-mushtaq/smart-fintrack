import { headers } from "next/headers";
import {  FetchOptions } from "../types";


export async function getServerFetch(url: string, options: FetchOptions) {
  const response = await fetch(url, {
    next: options,
    cache: "force-cache",
    headers: headers(),
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
