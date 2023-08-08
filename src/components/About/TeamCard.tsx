import Image from "next/image";
import Title from "../Layout/Title";
import authorImg from "@/media/author.jpg"
const TeamCard = () => {
  return (
    <div className="card relative bg-neutral max-w-md mx-auto">
      <div className="avatar mx-auto mt-8 ">
        <div className="w-24 relative rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
          <Image
            alt="Adnan Mushtaq"
            src={authorImg}
            placeholder="blur"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="details p-8">
        <Title color="secondary" type="level3">
          Adnan Mushtaq
        </Title>
        <p className="font-light opacity-75">Software Engineer</p>
        <p className="my-2 font-small">
          As the brainchild of SmartFinTrack, Adnan is a passionate software
          engineer with over two years of industry experience. With a background
          in finance and a deep understanding of technology, Adnan envisioned
          SmartFinTrack as a solution to the challenges faced by individuals in
          managing their finances effectively.
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
