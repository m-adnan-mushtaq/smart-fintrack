import { AuxProps } from "@/lib/types/types";

interface BtnProps extends AuxProps {
  type: ColorType;
  style?:string,
  clicked: () => void;
  loading: boolean;
  btnType?:"button"|"submit"|"reset"
}

const LoadingButton = ({btnType, type,style, loading, clicked, children }: BtnProps) => {
  return (
    <button type={btnType ?? "button"} onClick={clicked} disabled={loading} className={`btn btn-${type} ${style}`}>
      {loading ? (
        <>
          <span className="loading loading-spinner"></span>
          {children}...
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default LoadingButton;
