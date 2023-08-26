import { SEKELETON_COLOR } from "@/lib/common/commont";
import { AuxProps } from "@/lib/types";
import { Suspense } from "react";
const Loader = () => {
  return (
    <div className="h-screen mt-8">
      <div className="animate-pulse flex space-x-4">
    <div className="space-y-6 py-1">
      <div className={`h-4 ${SEKELETON_COLOR} rounded`}></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className={`h-2 ${SEKELETON_COLOR} rounded col-span-2`}></div>
          <div className={`h-2 ${SEKELETON_COLOR} rounded col-span-1`}></div>
        </div>
        <div className={`h-8 ${SEKELETON_COLOR} rounded`}></div>
      </div>
    </div>
  </div>
    <div className="flex flex-col gap-16 md:flex-row m-4">
      <div
        role="status"
        className="w-64 border border-neutral rounded shadow animate-pulse  dark:border-gray-700"
      >
        <div className={`h-2.5 ${SEKELETON_COLOR}  rounded-full dark:bg-gray-700 w-32 mb-2.5`}></div>
        <div className={`h-2.5 ${SEKELETON_COLOR} rounded-full dark:bg-gray-700 w-32 mb-2.5`}></div>
        <div className={`w-64 h-2 mb-10 ${SEKELETON_COLOR} rounded-full dark:bg-gray-700`}></div>
        <div className="flex items-baseline mt-4 space-x-6">
          <div className={`w-full ${SEKELETON_COLOR} rounded-t-lg h-72 dark:bg-gray-700`}></div>
          <div className={`w-full h-56 ${SEKELETON_COLOR} rounded-t-lg dark:bg-gray-700`}></div>
          <div className={`w-full ${SEKELETON_COLOR} rounded-t-lg h-72 dark:bg-gray-700`}></div>
          <div className={`w-full h-64 ${SEKELETON_COLOR} rounded-t-lg dark:bg-gray-700`}></div>
          <div className="w-fullbg-blue-950 rounded-t-lg h-32 dark:bg-gray-700"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
      <div
        role="status"
        className="w-64 border border-neutral rounded shadow animate-pulse  dark:border-gray-700"
      >
        <div className="flex items-baseline mt-4 space-x-6">
          <div className={`w-full ${SEKELETON_COLOR} rounded-t-lg h-72 dark:bg-gray-700`}></div>
          <div className={`w-full h-56 ${SEKELETON_COLOR} rounded-t-lg dark:bg-gray-700`}></div>
          <div className={`w-full ${SEKELETON_COLOR} rounded-t-lg h-72 dark:bg-gray-700`}></div>
          <div className={`w-full h-64 ${SEKELETON_COLOR} rounded-t-lg dark:bg-gray-700`}></div>
          <div className={`w-full ${SEKELETON_COLOR} rounded-t-lg h-64 dark:bg-gray-700`}></div>
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
