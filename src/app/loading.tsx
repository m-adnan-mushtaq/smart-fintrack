import Image from "next/image"
import loadingSvg from "@/media/public-loading.svg"

const loading = () => {
  return (
    <div className="h-screen flex w-screen items-center justify-center">
            <Image
            src={loadingSvg}
            alt="loading..."
            width={200}
            height={200}
            />
    </div>
  )
}

export default loading