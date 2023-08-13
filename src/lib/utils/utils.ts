import { ZodError } from "zod";
/***********************************/
/* FILE CONTAINS HELPER FUNCTION*/
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



export {
    ValidationErrors,
    combinedErrorMap
}