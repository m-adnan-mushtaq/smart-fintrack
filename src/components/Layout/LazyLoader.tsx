import { Suspense } from "react";
const LazyLoader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense
      fallback={
        <div className="flex w-full items-center my-8 justify-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default LazyLoader;
