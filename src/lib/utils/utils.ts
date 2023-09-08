import { ZodError } from "zod";
import { ActionResponse , FetchOptions } from "../types";
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

/**
 *
 * @param promise
 * @returns success message after executing promise
 */
async function handleActionResponse(
  promise: Promise<ActionResponse>
): Promise<string> {
  try {
    const response = await promise;

    if (!response.success) {
      throw new Error(response.message);
    }

    return response.message;
  } catch (error) {
    throw error;
  }
}

export function getUserChannel(userId:string){
  return `private-user-${userId}`
}

export function getBasePath(){
  return `http://localhost:3000`
}

export async function useFetch<T>(url: string, options: FetchOptions):Promise<T> {
  const response = await fetch(url, {
    next: options,
    // headers: headers(),
  });
  if (!response.ok || response.status >= 310) throw Error(response.statusText);
  return response.json();
}
export { ValidationErrors, combinedErrorMap, handleActionResponse };
