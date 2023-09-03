const ProfileCaution = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col p-8 gap-4 items-center justify-center min-h-16 max-w-screen-sm mx-auto mt-4 mb-10 rounded shadow-sm shadow-red-400 border-red-500 border-2 ">
      <div className="flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="shrink-0 w-8 h-8 stroke-error"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <h1 className="text-error capitalize text-xl font-semibold">this page is private to you</h1>
      </div>
      <p className="text-red-300 font-light lowercase">{message}</p>
    </div>
  );
};

export default ProfileCaution;
