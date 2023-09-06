import AuthMenu from "../Auth/AuthMenu";
import ActivityLogs from "./ActivityLogs";

const AdminNav = () => {
  return (
    <nav className="navbar bg-neutral px-4">
      <div className="flex-1">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
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
      </div>
      <div className="flex-none gap-4">
        <ActivityLogs/>
        <AuthMenu size={40} bg="neutral" />
      </div>
    </nav>
  );
};

export default AdminNav;
