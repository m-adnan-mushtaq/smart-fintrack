import Image from "next/image"

const GoogleBtn = ({size}:{size?:string}) => {
  return (
    <button type="button" className={`btn  shadow-lg btn-outline md:btn-${size ?? 'lg'} rounded-full`}>
        <Image
          src="/assets/google.svg"
          alt="google"
          loading="lazy"
          width={30}
          height={30}
        />
        Continue with Google
      </button>
  )
}

export default GoogleBtn