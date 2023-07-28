import { menuLinks } from "@/lib/common/commont";
import Link from "next/link";
import Logo from "./Logo";



const MenuLinks = () => (
  <>
    {menuLinks.map((link:MenuLink) => (
      <li key={link.path}>
        <Link href={link.path}>{link.label}</Link>
      </li>
    ))}
  </>
);
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm capitalize dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <MenuLinks/>
          </ul>
        </div>
       <Logo/>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal capitalize px-1">
          <MenuLinks/>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-secondary">Log IN</a>
      </div>
    </div>
  );
};

export default Navbar;
