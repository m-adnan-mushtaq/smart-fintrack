"use client"
import { AuxProps } from "@/lib/types"
import { RootState } from "@/store"
import { redirect } from "next/navigation"
import { useSelector } from "react-redux"

const RedirectAuth = ({children}:AuxProps) => {
 const {user} = useSelector((state:RootState)=>state.auth)
 if(user){
     redirect("/admin")
 }
  return (
    <>
        {children}
    </>
  )
}

export default RedirectAuth