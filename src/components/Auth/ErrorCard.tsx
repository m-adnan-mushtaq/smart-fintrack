"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ErrorCard = () => {
  const params = useSearchParams();
  const authError = params.get("error");
  return (
    <div className="py-2 px-4 bg-neutral rounded shadow-lg ring-offset-8 ring ring-offset-base-100 ring-secondary ">
      <div tabIndex={0} className="collapse ">
        <div className="collapse-title text-xl font-medium">
          Something Went Wrong, Hold tight, we are fixing!
        </div>
        <div className="collapse-content">
          <p>{JSON.stringify(authError)}</p>
        </div>
        <Link href="/auth" className="link link-hover">
          Sign in Again!
        </Link>
      </div>
    </div>
  );
};

export default ErrorCard;
