"use client"
import Spinner from "../Layout/Spinner"
import GoogleBtn from "../Auth/GoogleBtn"
import Link from "next/link"
import Email from "../svg/Email"
import { useSelector } from "react-redux"
import { RootState } from "@/store"

const AuthLinks = () => {
 const {user,loading} = useSelector((state:RootState)=>state.auth)
 let content;
 if(loading) content=<Spinner/>
 if(user) content=<></>
 if(!user && !loading) content=(
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