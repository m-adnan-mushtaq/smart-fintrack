"use client";
import { DbUser } from "@/lib/types";
import { useAuthStore } from "@/client/store";
import { useSession } from "next-auth/react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import LoadingButton from "../Layout/LoadingButton";
import { HandleValidationErrors, NameDto } from "@/lib/dto";
import { combinedErrorMap} from "@/client/helpers/utils";
import { updateUser } from "@/lib/actions";
import { toast } from "react-hot-toast";
import { useTransition } from "react";
import { handleServerActionResponse } from "@/client/helpers";

const ProfileForm = () => {
  const { user, setUser } = useAuthStore();
  const dbUser = user as DbUser;
  const { update } = useSession();
  const [_,startTransition]  = useTransition()
  const updateUserHandler =  (data: FormData) => {
    startTransition(async()=>{
      try {
        const name = data.get("name");
        if (user?.name === name) return;
        const parsedData = NameDto.safeParse({ name });
        if (!parsedData.success) throw combinedErrorMap(parsedData.error);
        const successMessage = await handleServerActionResponse(
          updateUser({
            where: { id: user?.id },
            data: { name: parsedData.data.name },
          })
        );
        toast.success(successMessage);
        setUser({ ...user, name: parsedData.data.name } as DbUser);
        await update(user);
      } catch (error) {
        HandleValidationErrors(error);
      }

    })
  };
  return (
    <>
      <form
        action={updateUserHandler}
        className=" py-4 max-w-screen-sm flex flex-col gap-4"
      >
        <label htmlFor="name" className="label">
          My Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Type here"
          defaultValue={dbUser.name}
          className="input input-bordered input-info w-full "
        />
        <div className="label">
          Email Address
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
                <h2 className="card-title">help?</h2>
                <p className="capitalize">
                  To Update Email please visit verification page
                </p>
              </div>
            </div>
          </div>
        </div>
        <input
          type="email"
          placeholder="Type here"
          defaultValue={dbUser.email}
          readOnly
          disabled
          className="input input-bordered input-info w-full "
        />
        <label htmlFor="email" className="label">
          Currency
        </label>
        <input
          type="text"
          placeholder="Type here"
          defaultValue={dbUser.currency}
          readOnly
          disabled
          className="input input-bordered input-info w-full "
        />
        <div className="clear-both ">
          <SubmitBtn />
        </div>
      </form>
    </>
  );
};

export default ProfileForm;

export const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <LoadingButton
      loading={pending}
      type="secondary"
      btnType="submit"
      style="float-right"
    >
      Save chnages
    </LoadingButton>
  );
};
