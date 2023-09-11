import { featuresData } from "@/client/common";
import Line from "@/components/Layout/Line";
import Title from "@/components/Layout/Title";


const FeatureCard = ({
  title,
  details,
  SvgIcon,
}: {
  title: string;
  details: string;
  SvgIcon: React.FC;
}) => {
  return (
    <div className="card flex bg-neutral shadow shadow-secondary mx-4 px-4 py-10  text-left flex-col gap-2 w-full max-w-xs">
      <div className="flex items-start justify-start">
        <div className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500  shadow-lg p-2">
          <SvgIcon />
        </div>
      </div>
      <Title color="secondary" type="level3">
        {title}
      </Title>

      <p>{details}</p>
    </div>
  );
};
const Features = () => {
  return (
    <section>
      <Title type="level2" color="primary">
        Our innovative Features
        <Line type="primary" />
      </Title>
      <div className="carousel rounded-box py-4">
        {featuresData.map((feature, i) => (
          <div key={i} className="carousel-item">
            <FeatureCard
              title={feature.title}
              details={feature.description}
              SvgIcon={feature.Icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
