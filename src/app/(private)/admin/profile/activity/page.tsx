import InfiniteActivityLogs from "@/components/ActivityLog/InfiniteActivityLogs";
import MarkActivityRead from "@/components/ActivityLog/MarkActivityRead";
import Title from "@/components/Layout/Title";
import ArrowBackSvg from "@/components/svg/ArrowBackSvg";
import { SITE_TITLE } from "@/lib/common/common";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SITE_TITLE + "activities",
};
const page = () => {
  return (
    <section>
      <div className="flex justify-between py-8 px-4">
        <ArrowBackSvg />
        <Title type="level2" color="secondary">
          My Activities
        </Title>
        <div
          className="tooltip tooltip-secondary tooltip-left"
          data-tip="Mark all as Read"
        >
          <MarkActivityRead/>
        </div>
      </div>
      <InfiniteActivityLogs />
    </section>
  );
};

export default page;
