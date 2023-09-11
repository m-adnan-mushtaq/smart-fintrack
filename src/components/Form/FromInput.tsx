import { TInput } from "@client/types";
import { FieldValues } from "react-hook-form";

const FromInput = <TKeys, TUserType extends FieldValues>({
  name,
  label,
  infoText,
  type,
  placeholder,
  errorFeedback,
  register,
}: TInput<TKeys, TUserType>) => {
  return (
    <>
      <div className="form-control w-full">
        <label className="label capitalize">
          <span className="label-text">{label}</span>
          <span className="label-text-alt">{infoText}</span>
        </label>
        <input
          type={type}
          placeholder={placeholder ?? "Type here"}
          className={`input input-bordered w-full  ${
            errorFeedback ? "input-error" : ""
          }`}
          {...register(name as any)}
        />
        <label className="label">
          {errorFeedback ? (
            <span className="label-text-alt text-red-500">{errorFeedback.message}</span>
          ) : (
            <span className="label-text-alt"></span>
          )}
        </label>
      </div>
    </>
  );
};

export default FromInput;
