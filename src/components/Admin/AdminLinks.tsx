"use client";
import { featuresData } from "@/lib/common/commont";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminLinks = () => {
  const path = usePathname();
  return (
    <ul className="menu mt-2">
      <li className="menu-title">Dashboard</li>
      {featuresData.map((feature) => (
        <li key={feature.path}>
          <Link
            className={`${
              path === feature.path ? "bg-base-100 text-primary" : ""
            } ${feature.selector}`}
            href={feature.path}
          >
            <feature.Icon size="6" />
            <span className="ml-2">{feature.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AdminLinks;
