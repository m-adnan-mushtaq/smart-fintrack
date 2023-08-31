import AuthMenu from "../Auth/AuthMenu";

const AdminNav = () => {
  return (
    <nav className="navbar bg-neutral">
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
        <div className="dropdown dropdown-end">
        <div className="tooltip tooltip-bottom tooltip-secondary" data-tip="Notifications">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-sm indicator-item">0</span>
            </div>
          </label>
</div>
          
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-neutral shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg menu-title text-center">
                Notifications
              </span>
              <ul>
                <li className="truncate">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut aliquid, excepturi minima ad culpa ducimus quidem sapiente rerum tempore ratione consequatur numquam suscipit sequi voluptas doloremque aliquam voluptate saepe repellat.
                </li>
              </ul>
              <div className="card-actions">
                <button className="btn btn-sm btn-ghost btn-block">
                  mark all as read
                </button>
              </div>
            </div>
          </div>
        </div>
        <AuthMenu size={40} bg="neutral" />
      </div>
    </nav>
  );
};

export default AdminNav;
