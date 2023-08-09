import Link from "next/link"

const VerifyInfo = () => {
  return (
    <div className="flex mt-2 flex-row items-center justify-center capitalize">
            <p >Verify accout Help</p>
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-circle btn-ghost btn-xs text-info"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </label>
              <div
                tabIndex={0}
                className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64"
              >
                <div className="card-body">
                  <Link href="/auth/verify" prefetch={false} className="link link-primary link-hover">Go to verification page!</Link>
                  <p className="text-sm">created account,but not verified yet!</p>
                </div>
              </div>
            </div>
        </div>
  )
}

export default VerifyInfo