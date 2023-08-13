import Features from "@/components/About/Features";
import TeamCard from "@/components/About/TeamCard";
import LazyLoader from "@/components/Layout/LazyLoader";
import Line from "@/components/Layout/Line";
import Title from "@/components/Layout/Title";
import Wave from "@/components/svg/WaveSvg";
import { SITE_TITLE } from "@/lib/common/commont";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: SITE_TITLE + "About Us",
};

const AboutPage = () => {
  
  return (
    <>
      <div className="w-screen overflow-hidden">
        <Wave color="#e779c1" />
      </div>
      <div className="px-4 py-16 text-center max-w-screen-lg mx-auto">
        <h1 className="text-6xl mb-10 font-extrabold text-primary capitalize">
          About US
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 items-center">
          <div className="text-left">
            <Title type="level2" color="secondary">
              What's our Vision?
            </Title>

            <p className="my-4">
              SmartFinTrack is a comprehensive finance management website
              designed to empower individuals in their financial journey. Our
              platform offers a suite of budgeting tools, income and expense
              tracking, savings goals management, and bill reminders to help
              users take control of their finances. Whether you're a seasoned
              professional or just starting your financial journey,
              SmartFinTrack provides the insights and tools you need to achieve
              financial stability and success.
            </p>
          </div>
          <div>
            <Image
              alt="smartfintrack"
              src="/assets/finance.svg"
              loading="lazy"
              className="mx-auto w-auto h-auto md:ms-auto"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="flex mt-8 flex-col-reverse md:flex-row [&>*]:flex-1 gap-4 items-center">
          <div>
            <Image
              alt="smartfintrack"
              src="/assets/vision.svg"
              loading="lazy"
              className="mx-auto w-auto h-auto md:ms-auto"
              width={400}
              height={400}
            />
          </div>
          <div className="text-left">
            <Title type="level2" color="secondary">
              Why is SmartFinTrack Needed?
            </Title>

            <p className="my-4">
              Managing finances effectively is crucial for everyone, regardless
              of their financial background. However, the complexity of personal
              finance often leaves individuals feeling overwhelmed and unsure of
              where to start. SmartFinTrack fills this gap by providing an
              intuitive and user-friendly platform that simplifies budgeting,
              tracks income and expenses, and aids in achieving financial goals.
              Our mission is to enable users to make informed financial
              decisions, build a strong foundation, and work towards a brighter
              financial future.
            </p>
          </div>
        </div>
        <div className="flex gap-10 flex-col">
          <LazyLoader>
            <Features />
          </LazyLoader>
          <Title type="level2" color="primary">
            Meet Our Super hero
            <Line type="primary" />
          </Title>
          <TeamCard />
        </div>
      </div>
      <div className="hero ">
        <div className="hero-content text-center">
          <div className="max-w-screen-md bg-neutral rounded p-4">
            <Title color="primary" type="level2" >Connecting Dreams,Reach Us Today!</Title>
            <Line type="primary" />
            <p className="py-6 capitalize">
            don't hesitate to reach out. Your aspirations are important to us, and we're ready to provide personalized support and guidance. Connect with us today and let's shape a brighter financial future together!
            </p>
            <Link href="/support" className="btn btn-primary">Reach Us</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
