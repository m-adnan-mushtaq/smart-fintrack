import Title from "@/components/Layout/Title";
import ClockSvg from "@/components/svg/ClockSvg";
import RefreshSvg from "@/components/svg/RefreshSvg";

const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="h-screen flex items-center justify-center px-4">
      <div className="flex items-center gap-4 flex-col max-w-screen-md">
        <h1 className="text-red-400 text-9xl font-extrabold">
          500
        </h1>
        <div className="bg-neutral p-8 rounded capitalize">
          <h5 className="text-red-500 font-semibold">
            Sorry, something went wrong on our end. We are currently trying to
            fix the problem.
          </h5>
          <div tabIndex={0} className="collapse  border-primary border my-4">
            <div className="collapse-title text-xl font-medium">
              Click to see error details
            </div>
            <div className="collapse-content">
              <p>{JSON.stringify(error.message)}</p>
            </div>
          </div>
          <p>In the meantime, you can</p>
          <button onClick={reset} className="flex gap-2">
            <RefreshSvg /> Refresh the page
          </button>
          <div className="flex gap-2">
            <ClockSvg /> Wait a few minutes
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalError;
