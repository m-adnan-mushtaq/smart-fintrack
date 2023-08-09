import { Suspense } from "react";
import Spinner from "./Spinner";
const LazyLoader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense
      fallback={
        <Spinner/>
      }
    >
      {children}
    </Suspense>
  );
};

export default LazyLoader;
