import { AuxProps } from "@/lib/types/types";

interface BtnProps extends AuxProps {
  type: ColorType;
  style?:string,
  clicked: () => void;
  loading: boolean;
}

const LoadingButton = ({ type,style, loading, clicked, children }: BtnProps) => {
  return (
    <button onClick={clicked} disabled={loading} className={`btn btn-${type} ${style}`}>
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
