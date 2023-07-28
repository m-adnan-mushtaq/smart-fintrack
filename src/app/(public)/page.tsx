import Section from "@components/Home/Section";
import Hero from "@components/Home/Hero";
import Image from "next/image";
import Footer from "@/components/Layout/Footer";
import { features } from "@/lib/common/commont";
const Home = () => {
  return (
    <>
      <div className="text-center relative flex items-center flex-col">
        {["feature_1", "feature_2", "feature_3", "feature_4", "feature_5"].map(
          (img) => (
            <Image
              key={img}
              id={img}
              src={`/assets/${img}.png`}
              alt="feature"
              className="shadow-lg w-auto h-auto  object-cover fixed bottom-0  translate-x-0 translate-y-[100%]  z-10 mx-auto transition-transform duration-300 delay-300"
              loading="lazy"
              width={940}
              height={400}
            />
          )
        )}
      </div>
      <Hero />
      <div className="features-container">
        {features.map((feature: Feature) => (
          <Section
            key={feature.imgId}
            title={feature.title}
            tagline={feature.tagline}
            imgId={feature.imgId}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
