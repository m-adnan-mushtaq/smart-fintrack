"use client"
import GlobalError from "@/components/Layout/GlobalError"

const GlobalErrorPage = ({error,reset}:{error:Error,reset:()=>void}) => {
  return (
    <GlobalError error={error} reset={reset} />
  )
}

export default GlobalErrorPage