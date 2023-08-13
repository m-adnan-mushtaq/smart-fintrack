import RedirectAuth from "@/components/Guards/RedirectAuth";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RedirectAuth>
      <div className="flext items-center pt-10 pb-4">
        <div className="bg-neutral max-w-screen-md mx-auto shadow-md shadow-secondary-focus rounded-md px-10 py-6">
          {children}
          
        </div>
      </div>
    </RedirectAuth>
  );
};

export default AuthLayout;
