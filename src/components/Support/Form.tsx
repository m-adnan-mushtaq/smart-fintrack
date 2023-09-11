"use client"
import { sendSupportEmail } from "@/lib/actions";
import { HandleValidationErrors, MessageDto } from "@/lib/dto";
import { combinedErrorMap } from "@/client/helpers/utils";
import { toast } from "react-hot-toast";
import SendSupportMsg from "./SendSupportMsg";
import { ElementRef, useRef, useTransition } from "react";

const SupportFrom = () => {
  const [_,startTrasition]=useTransition()
  const formRef=useRef<ElementRef<"form">>(null)
  const submitHandler = (formData: FormData) => {
    startTrasition(async ()=>{
      try {
        let formKeys=["name","email","message"]
        const [name,email,message]=formKeys.map(key=>formData.get(key))
        const parsed=await MessageDto.safeParseAsync({name,email,message});
        if(!parsed.success) throw combinedErrorMap(parsed.error)
        await sendSupportEmail(parsed)
        formRef?.current?.reset()
        toast.success("Your message has sent, we will get back to you!")
      } catch (error) {
        HandleValidationErrors(error)
      }
    })
  };
  return (
    <form ref={formRef} action={submitHandler} className="flex flex-col gap-4 mt-16">
      <input
        title="enter your name"
        required
        type="text"
        name="name"
        placeholder="Your Name"
        className="input input-bordered input-secondary w-full"
      />
      <input
        title="enter a valid input"
        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
        required
        type="email"
        name="email"
        placeholder="Your Email"
        className="input input-bordered input-secondary w-full"
      />
      <textarea
        rows={5}
        required
        minLength={20}
        name="message"
        className="textarea textarea-secondary w-full"
        placeholder="Your Message"
      ></textarea>
      <SendSupportMsg />
    </form>
  );
};

export default SupportFrom;
