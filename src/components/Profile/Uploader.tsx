"use client";

import { useAuthStore } from "@/client/store";
import Image from "next/image";

const CameraIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M1 8a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 018.07 3h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0016.07 6H17a2 2 0 012 2v7a2 2 0 01-2 2H3a2 2 0 01-2-2V8zm13.5 3a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM10 14a3 3 0 100-6 3 3 0 000 6z"
      clipRule="evenodd"
    />
  </svg>
);
const Uploader = () => {
  const { user } = useAuthStore();
  return (
    <section className="relative rounded-full">
      <div className="avatar">
        <div className="w-24 rounded-full ">
          <Image
            src={user?.picUrl as string}
            loading="lazy"
            alt={user?.name as string}
            referrerPolicy="no-referrer"
            fill
          />
        </div>
      </div>
      <div
        className="tooltip tooltip-bottom tooltip-secondary"
        data-tip="Update Profile Picture"
      >
        <button className="btn-sm btn-neutral btn-block absolute bottom-0">
          <CameraIcon />
        </button>
      </div>
      <input type="file" name="avatar" className="hidden" />
    </section>
  );
};

export default Uploader;
