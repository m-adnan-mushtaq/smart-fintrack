
function returnSizeHelper(type:TitleType){
    let fontSize='xl'
    switch (type) {
        case "level1":
            fontSize="4xl md:text-6xl"
            break;
        case "level2":
            fontSize="3xl md:text-4xl"
            break;
        case "level3":
            fontSize="2xl md:text-3xl"
            break;
        default:
            break;
    }
    return fontSize
}

interface Props extends TilteProps{
    children:React.ReactNode
}
const Title = (props:Props) => {
  return (
    <h1 className={` capitalize font-semibold  text-${props.color} ${props.styles} text-${returnSizeHelper(props.type)}`}>
        {props.children}
    </h1>
  )
}

export default Title