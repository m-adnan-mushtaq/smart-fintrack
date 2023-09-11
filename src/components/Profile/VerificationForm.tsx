"use client";

import { useAuthStore, useVerifyStore } from "@/client/store";
import { ElementRef, useRef, useTransition } from "react";
import LoadingButton from "../Layout/LoadingButton";
import { EmailDto, HandleValidationErrors, OtpDto } from "@/lib/dto";
import toast from "react-hot-toast";
import {
  checkEmailAvailability,
  sendVerificationEmail,
  verifyOtp,
} from "@/lib/actions";
import Title from "../Layout/Title";
import { combinedErrorMap } from "@/client/helpers/utils";
import { signOut} from "next-auth/react";

const EmailStep = () => {
  const { user } = useAuthStore();
  const { updateStep, updateVerifyEmail } = useVerifyStore();
  const emailRef = useRef<ElementRef<"input">>(null);
  const [pending, startTransition] = useTransition();
  const sendVerificationEmailHandler = () => {
    startTransition(async () => {
      try {
        const email = emailRef.current?.value;
        const parsedData = EmailDto.safeParse({ email });
        if (!parsedData.success) throw Error("Invalid Email Address!");
        const parsedEmail = parsedData.data.email;
        const { success, message } = await checkEmailAvailability(parsedEmail);
        if (!success) throw Error(message);
        await sendVerificationEmail(parsedEmail);
        updateStep(1, "✓");
        updateVerifyEmail(parsedEmail);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      }
    });
  };
  return (
    <div className="max-w-xs">
      <div className="form-control w-full my-4">
        <label className="label">
          <span className="label-text">Enter New Email</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          ref={emailRef}
          defaultValue={user?.email}
          className="input input-bordered w-full input-secondary "
        />
        <label className="label">
          <span className="label-text-alt"></span>
          <span className="label-text-alt">Enter a valid email address</span>
        </label>
      </div>
      <div className="text-right">
        <LoadingButton
          loading={pending}
          type="secondary"
          clicked={sendVerificationEmailHandler}
        >
          Verify Email
        </LoadingButton>
      </div>
    </div>
  );
};

const OtpStep = () => {
  const { user } = useAuthStore();
  const { verifyEmail } = useVerifyStore();
  const otpRef = useRef<ElementRef<"input">>(null);
  const [pending, startTransition] = useTransition();

  const updateEmailHandler = () => {
    startTransition(async () => {
      try {
        const otp = otpRef.current?.value;
        if (!otp || !verifyEmail) throw Error("Opt can't be empty");
        const parsedData = OtpDto.safeParse({ otp });
        if (!parsedData.success) throw combinedErrorMap(parsedData.error);
        const { success, message } = await verifyOtp(
          verifyEmail,
          parsedData.data.otp,
          {
            where: {
              id: user?.id,
            },
            data: {
              email: verifyEmail,
            },
          }
        );
        if (!success) throw Error(message);
        toast.success(`${verifyEmail} has been verified`);
        await signOut()
      } catch (error) {
        HandleValidationErrors(error);
      }
    });
  };
  return (
    <section className="gap-4 max-w-screen-sm">
      <Title color="accent" type="level3">
        Verify otp
      </Title>
      <p className="menu-title capitalize">
        we have sent otp to your email address, please enter below to update
        email
      </p>
      <input
        type="text"
        ref={otpRef}
        placeholder="Type here"
        className="input input-bordered  block input-accent w-full my-6"
      />
      <div className="text-right">
        <LoadingButton
          loading={pending}
          type="accent"
          clicked={updateEmailHandler}
        >
          Verify Email
        </LoadingButton>
      </div>
      <div className="text-center">
        <button className="btn btn-ghost mx-auto">resend email</button>
      </div>
    </section>
  );
};
const VerificationForm = () => {
  const { currentStep, steps } = useVerifyStore();

  return (
    <div className="flex gap-8 flex-col sm:flex-row">
      <ul className="steps steps-horizontal sm:steps-vertical">
        {steps.map((step, i) => (
          <li
            data-content={step.content}
            key={i}
            className={
              "step text-gray-400 " +
              (i <= currentStep.index ? "step-secondary" : "")
            }
          >
            {step.label}
          </li>
        ))}
      </ul>
      <div className="flex-1 p-4">
        {currentStep.index === 0 ? <EmailStep /> : null}
        {currentStep.index === 1 ? <OtpStep /> : null}
      </div>
    </div>
  );
};

export default VerificationForm;
