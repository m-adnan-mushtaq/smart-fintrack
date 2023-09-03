import { ZodError } from "zod";
import { ActionResponse } from "../types";
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

export { ValidationErrors, combinedErrorMap, handleActionResponse };
