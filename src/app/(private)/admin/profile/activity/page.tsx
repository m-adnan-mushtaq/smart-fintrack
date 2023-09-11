import Title from "@/components/Layout/Title";
import ArrowBackSvg from "@/components/svg/ArrowBackSvg";
import MarkReadSvg from "@/components/svg/MarkReadSvg";
import { SITE_TITLE } from "@/lib/common/common";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SITE_TITLE + "activities",
};
const page = () => {
  const markAllActivitesReadHandler = async () => {
    "use server";
  };
  return (
    <section>
      <div className="flex justify-between py-8 px-4">
        <ArrowBackSvg />
        <Title type="level2" color="secondary">
          My Activities
        </Title>
        <form action={markAllActivitesReadHandler}>
          <div className="tooltip" data-tip="hello">
            <button type="submit">
              <MarkReadSvg />
            </button>
          </div>
        </form>
      </div>
      <div>
        <h1>infinte scroll goes here....</h1>
      </div>
    </section>
  );
};

export default page;
