"use client"
import GoogleBtn from "../Auth/GoogleBtn"
import Link from "next/link"
import Email from "../svg/Email"
import { useAuthStore } from "@/client/store"

const AuthLinks = () => {
 const {user}=useAuthStore()
 let content;
 if(user) content=<></>
 if(!user) content=(
    <>
     <p className="mt-10 text-xl">
        Get Your <span className="font-bold">free account today</span>
      </p>
      <div className="pt-4  flex flex-col md:flex-row">
        <GoogleBtn/>
        <div className="divider lg:divider-horizontal">OR</div> 
        <Link
          href="/auth/join"
          className="btn btn-secondary btn-outline md:btn-lg rounded-full"
        >
          <Email />
          Continue with Email
        </Link>
      </div>
      <p className="text-slate-400 mt-4">No Credit Card Required</p>
    </>
 )
  return (
    <div>
        {content}
    </div>
  )
}

export default AuthLinks