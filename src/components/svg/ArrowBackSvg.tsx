"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ArrowBackSvg = ({ size }: { size?: string }) => {
  const router = useRouter();
  return (
    <div
      className="tooltip tooltip-secondary tooltip-bottom"
      data-tip="Go Back"
    >
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          router.back();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={size ? `w-${size} h-${size}` : `w-10 h-10`}
        >
          <path
            fillRule="evenodd"
            d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
};

export default ArrowBackSvg;
