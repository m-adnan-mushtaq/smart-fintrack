"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const GoogleBtn = ({ size }: { size?: string }) => {
  return (
    <Link
      href="/api/auth"
      onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
        event?.preventDefault();
        signIn("google", {
          redirect: false,
        });
      }}
      className={`btn  shadow-lg btn-outline md:btn-${
        size ?? "lg"
      } rounded-full`}
    >
      <Image
        src="/assets/google.svg"
        alt="google"
        loading="lazy"
        width={30}
        height={30}
      />
      Continue with Google
    </Link>
  );
};

export default GoogleBtn;
