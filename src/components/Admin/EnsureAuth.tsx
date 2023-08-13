"use client"
import { AuxProps} from "@/lib/types"
import { RootState } from "@/store"
import { redirect } from "next/navigation"
import { useSelector } from "react-redux"


const EnsureAuth = ({children}:AuxProps) => {
  
  const {user}= useSelector((state:RootState)=>state.auth)
  if(!user){
    redirect("/auth")
  }
  return (
    <>
        {children}
    </>
  )
}

export default EnsureAuth