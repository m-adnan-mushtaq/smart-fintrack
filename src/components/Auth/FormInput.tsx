import { InputProps } from "@/lib/types/types"


const FormInput = (props:InputProps) => {
  return (
    <div className={`form-control ${props.sizes ?? 'w-full'} my-0 py-0`}>
    <label className="label">
      <span className="label-text">{props.title}</span>
    </label>
    <input
      type={props.type}
      placeholder="Type here"
      className="input input-bordered w-full "
      name={props.name}
      value={props.value}
      onChange={props.changed}
      autoComplete="true"
    />
    <label className="label">
      <span className="label-text-alt "></span>
      <span className="label-text-alt ">{props.message}</span>
    </label>
  </div>
  )
};

export default FormInput;
