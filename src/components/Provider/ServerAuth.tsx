import { authConfig } from "@/lib/config"
import { DbUser } from "@/lib/types"
import { store } from "@/store"
import { setAuth } from "@/store/slices/auth.slice"
import { getServerSession } from "next-auth"

const ServerAuth = async () => {
    const session = await getServerSession(authConfig)
    if(session?.user){
        store.dispatch(setAuth(session.user as DbUser))
    }
  return null
}

export default ServerAuth