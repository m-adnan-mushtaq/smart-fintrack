const Spinner = () => {
  return (
    <div className="flex w-full items-center my-4 justify-center">
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );
};

export default Spinner;

export function SpinnerSm() {
  return <span className="loading loading-ring loading-lg mx-4 my-2"></span>;
}
