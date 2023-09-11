
const ErrorMsg = ({error}:{error:string}) => {
  return (
    <div className="p-8 max-w-screen-sm mx-auto border-2 border-red-600 rounded shadow-sm shadow-error flex items-center justify-center flex-col my-4">
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-error shrink-0 h-10 w-10" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span className="text-lg text-error">{error}</span>
  </div>
  )
}

export default ErrorMsg