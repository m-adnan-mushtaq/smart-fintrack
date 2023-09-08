import { toast } from "react-hot-toast"

export function showErrorToast(error:any){
    let message=error
    if(error instanceof Error){
        message=error.message
    }
    toast.error(message)
}