"use client";
import { menuLinks } from "@client/common";
import Link from "next/link";
import { usePathname} from 'next/navigation'

const MenuLinks = () => {
    const path=usePathname()
    return (
        <>
      {menuLinks.map((link: MenuLink) => {
        const isActive = path=== link.path;
        return (
          <li key={link.path}>
            <Link
              className={isActive ? "active" : ""}
              href={link.path}
              style={{ color: isActive ? "#e779c1" : "" }}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </>
  );
};
export default MenuLinks;
