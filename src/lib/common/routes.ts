import { env } from "../config/env.config"

export const baseUrlHelper=()=>{
    let url='http://127.0.0.1:3000'
    if (env.NODE_ENV==="production") {
        url=env.PRODUCTION_URL
    }

    return url

}
export const unreadActivityApiRoute=()=>`${baseUrlHelper()}/api/v1/admin/activity-logs/unread`
