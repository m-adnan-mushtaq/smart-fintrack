
const Line = ({type}:{type:ColorType}) => {
  return (
    <div className={`w-full max-w-[10rem] mx-auto h-0.5 mt-4 bg-${type}`}></div>
  )
}

export default Line