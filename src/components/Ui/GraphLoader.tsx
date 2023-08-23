import { AuxProps } from "@/lib/types";
import { Suspense } from "react";
const Loader = () => {
  return (
    <div className="h-screen mt-8">
    <div className="flex flex-col gap-16 md:flex-row m-4">
      <div
        role="status"
        className="w-64 border border-neutral rounded shadow animate-pulse  dark:border-gray-700"
      >
        <div className="h-2.5 bg-blue-950  rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
        <div className="h-2.5 bg-blue-950 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
        <div className="w-64 h-2 mb-10 bg-blue-950 rounded-full dark:bg-gray-700"></div>
        <div className="flex items-baseline mt-4 space-x-6">
          <div className="w-full bg-blue-950 rounded-t-lg h-72 dark:bg-gray-700"></div>
          <div className="w-full h-56 bg-blue-950 rounded-t-lg dark:bg-gray-700"></div>
          <div className="w-full bg-blue-950 rounded-t-lg h-72 dark:bg-gray-700"></div>
          <div className="w-full h-64 bg-blue-950 rounded-t-lg dark:bg-gray-700"></div>
          <div className="w-fullbg-blue-950 rounded-t-lg h-32 dark:bg-gray-700"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
      <div
        role="status"
        className="w-64 border border-neutral rounded shadow animate-pulse  dark:border-gray-700"
      >
        <div className="flex items-baseline mt-4 space-x-6">
          <div className="w-full bg-blue-950 rounded-t-lg h-72 dark:bg-gray-700"></div>
          <div className="w-full h-56 bg-blue-950 rounded-t-lg dark:bg-gray-700"></div>
          <div className="w-full bg-blue-950 rounded-t-lg h-72 dark:bg-gray-700"></div>
          <div className="w-full h-64 bg-blue-950 rounded-t-lg dark:bg-gray-700"></div>
          <div className="w-full bg-blue-950 rounded-t-lg h-64 dark:bg-gray-700"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </div>
  );
};

const GraphLoader = ({ children }: AuxProps) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

export default GraphLoader;
