import { authConfig } from "@/lib/config/auth/authConfig"
import NextAuth from "next-auth"

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }