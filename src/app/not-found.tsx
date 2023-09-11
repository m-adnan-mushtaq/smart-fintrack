import Title from "@/components/Layout/Title";
import { menuLinks } from "@client/common";
import svg from "@/media/404.svg";
import Image from "next/image";
import Link from "next/link";
const NotFoundPage = () => {
  return (
    <div className="h-screen flex items-center justify-center px-4">
      <div className="flex flex-col gap-4 items-center justify-center">
        <Image
          src={svg}
          loading="lazy"
          width={400}
          height={400}
          alt="404"
        />
        <Title color="secondary" type="level2">
          Whoops! That page doesn’t exist.
        </Title>
        <p className="text-sm text-slate-400">
          Here are some helpful links instead:
        </p>
        <div className="flex">
                {menuLinks.map((link) => (
                <Link key={link.path} href={link.path} className="link capitalize link-hover mx-2">
                    {link.label}
                </Link>
                ))}

        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
