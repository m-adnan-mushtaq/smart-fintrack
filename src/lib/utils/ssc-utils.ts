import { headers } from "next/headers"
import { FetchOptions } from "@lib/types"

export async function fetchServerDateHelper<T>(url:string,options:FetchOptions):Promise<T>{
    const response=await fetch(url,{
      next:options,
      headers:headers()
    })
    if(!response.ok){
      throw Error(response.statusText)
    }
    return await response.json()
  }