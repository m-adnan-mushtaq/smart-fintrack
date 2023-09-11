import { ActionResponse } from "@/lib/types";
import { toast } from "react-hot-toast"

export function showErrorToast(error:any){
    let message=error
    if(error instanceof Error){
        message=error.message
    }
    toast.error(message)
}


/**
 *
 * @param promise
 * @returns success message after executing promise
 */
export async function handleServerActionResponse(
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
  