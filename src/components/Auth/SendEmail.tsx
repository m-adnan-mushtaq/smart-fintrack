"use client";
import { ElementRef, useRef, useTransition } from "react";
import Modal from "../Layout/Modal";
import LoadingButton from "../Layout/LoadingButton";
import { toast } from "react-hot-toast";
import {
  checkEmailExists,
  sendVerificationEmail,
  verifyOtp,
} from "@/lib/actions";
import { EmailDto, OtpDto } from "@/lib/dto";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/client/store";

const modalId = "verify_modal";
const SendEmail = () => {
  const modalRef = useRef<ElementRef<"dialog">>(null);
  const otpRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { verifyEmail, updateVerifyEmail } = useAuthStore();
  const [isPending, startTransition] = useTransition();
  const verifyOtPHandler = () => {
    startTransition(async () => {
      try {
        const otp = otpRef.current?.value;
        const parsed = OtpDto.safeParse({ otp });
        if (!verifyEmail) throw Error("Verify Email doesn't exists!");
        if (!parsed.success) throw Error("Otp must be 6 characters long!");
        const { message } = await verifyOtp(verifyEmail, parsed.data.otp, {
          where: { email: verifyEmail },
          data: {
            verified: true,
          },
        });
        toast.success(message);
        router.replace("/auth");
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      }
    });
  };

  const resendEmailHandler = () => {
    startTransition(async () => {
      try {
        const email = emailRef.current?.value;
        const parsedData = EmailDto.safeParse({ email });
        if (!parsedData.success) throw Error("Invalid Email Address!");
        const { success } = await checkEmailExists(parsedData.data.email);
        if (!success) throw Error("Email is not registered yet!");
        await sendVerificationEmail(parsedData.data.email);
        toast.success("Email has been sent");
        if (emailRef.current) {
          emailRef.current.value = "";
        }
        modalRef.current?.close();
        updateVerifyEmail(email as string);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      }
    });
  };
  return (
    <>
      <div className="my-4">
        <input
          type="number"
          maxLength={6}
          ref={otpRef}
          placeholder="Type here OTP"
          className="input input-bordered  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none input-secondary w-full max-w-xs"
        />
      </div>
      <LoadingButton
        clicked={verifyOtPHandler}
        type="secondary"
        style="my-4 btn-block"
        loading={isPending}
      >
        Verify Account
      </LoadingButton>
      <p className="text-slate-300 text-sm capitalize">
        didn't recevied a code?&nbsp;
        <button
          className="link link-hover link-secondary font-semibold uppercase"
          onClick={() => modalRef.current?.showModal()}
        >
          resend email
        </button>
      </p>
      <Modal
        title="Send Verification Email"
        btnLabel="send email"
        id={modalId}
        clicked={resendEmailHandler}
        ref={modalRef}
        loading={isPending}
      >
        <input
          type="email"
          ref={emailRef}
          placeholder="Type here email"
          className="input input-bordered input-secondary w-full max-w-xs"
        />
      </Modal>
    </>
  );
};

export default SendEmail;
