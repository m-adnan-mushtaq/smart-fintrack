"use client"
import { sendSupportEmail} from "@/lib/actions"
import { HandleValidationErrors, MessageDto } from "@/lib/dto"
import { combinedErrorMap } from "@/lib/utils/utils"
import React, { ElementRef, useRef, useTransition } from "react"
import { toast } from "react-hot-toast"

const SupportFrom = () => {
    const formRef=useRef<ElementRef<"form">>(null)
    const nameRef=useRef<ElementRef<"input">>(null)
    const emailRef=useRef<ElementRef<"input">>(null)
    const messageRef=useRef<ElementRef<"textarea">>(null)
    const [pending,startTransition]=useTransition()

    const submitHandler=(event:React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault()
        startTransition(async()=>{
            try {
                const name=nameRef.current?.value
                const email=emailRef.current?.value
                const message=messageRef.current?.value
                const parsedQuery = await MessageDto.safeParseAsync({name,email,message});
                if (!parsedQuery.success) throw combinedErrorMap(parsedQuery.error);
                await sendSupportEmail({name,email,message})
                toast.success("Your messsage has been received, we will respond you back")
                formRef.current?.reset()
            } catch (error) {
                 HandleValidationErrors(error);
            }
        })
    }
  return (
    <form ref={formRef}   className="flex flex-col gap-4 mt-16">
          <input
            title="enter your name"
            required
            type="text"
            name="name"
            ref={nameRef}
            placeholder="Your Name"
            className="input input-bordered input-secondary w-full"
          />
          <input
            title="enter a valid input"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            required
            type="email"
            name="email"
            ref={emailRef}
            placeholder="Your Email"
            className="input input-bordered input-secondary w-full"
          />
          <textarea
            rows={5}
            required
            minLength={20}
            name="message"
            ref={messageRef}
            className="textarea textarea-secondary w-full"
            placeholder="Your Message"
          ></textarea>
          <button onClick={submitHandler} disabled={pending}   type="submit" className="btn btn-primary">send message</button>
        </form>
  )
}

export default SupportFrom