import { AuxProps } from "@/lib/types/types";
import { forwardRef } from "react";
import LoadingButton from "./LoadingButton";
interface ModalProps extends AuxProps{
    id:string,
    clicked:()=>void,
    btnLabel:string,
    title:string,
    loading:boolean
}
const Modal = forwardRef<HTMLButtonElement,ModalProps>(({title,id,loading,clicked,btnLabel,children},ref) => {
  return (
    <dialog id={id} className="modal">
      <form method="dialog" className="modal-box text-left ">
      <button disabled={loading} ref={ref} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <h3 className="font-bold text-lg ">{title}</h3>
        <p className="py-4">
            {children}
        </p>
        <div className="modal-action">
            <LoadingButton  clicked={clicked} type="success" loading={loading} >
                {btnLabel}
            </LoadingButton>
          <button type="button" onClick={clicked} className="btn btn-success">
            </button> 
        </div>
      </form>
    </dialog>
  );
});

export default Modal;
