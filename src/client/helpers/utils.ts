import { FetchOptions } from "@/lib/types";
import { ZodError } from "zod";
/***********************************/
/* FILE CONTAINS HELPER FUNCTION FOR OVERALL*/
/***********************************/

class ValidationErrors extends Error {
  constructor(public errors: string[]) {
    super();
    this.name = "Zod Error";
    this.errors = errors;
  }
}

//combine zod error messaged
const combinedErrorMap = (error: ZodError) => {
  const errors: string[] = [];
  const fieldErrors = error.flatten().fieldErrors;
  Object.keys(fieldErrors).map((key) => {
    errors.push((fieldErrors[key] as string[])[0]);
  });
  return new ValidationErrors(errors);
};



export function getUserChannel(userId:string){
  return `private-user-${userId}`
}


export async function useFetch<T>(url: string, options: FetchOptions):Promise<T> {
  const response = await fetch(url, {
    next: options,
    // headers: headers(),
  });
  if (!response.ok || response.status >= 310) throw Error(response.statusText);
  return response.json();
}
export { ValidationErrors, combinedErrorMap };
