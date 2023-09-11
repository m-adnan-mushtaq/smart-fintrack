import SendEmail from "@/components/Auth/SendEmail";
import Title from "@/components/Layout/Title";
import { SITE_TITLE } from "@/lib/common";
import { Metadata } from "next";

export const metadata:Metadata={
  title:SITE_TITLE+"Verify Your Account"
}

const page = () => {
  return (
    <div className="text-center max-w-sm mx-auto">
      <Title color="secondary" type="level3">
        Verify Your Email address!
      </Title>
      <p className="text-slate-300 my-3 text-sm capitalize">
        we have sent you a temporary code to your email address please enter below, Make sure to check spam folder
      </p>
      <SendEmail />
    </div>
  );
};

export default page;
