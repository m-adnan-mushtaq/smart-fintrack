import Navbar from "@/components/Layout/Navbar"

const PublicLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
        <Navbar/>
        <main>
            {children}
        </main>
    </>
  )
}

export default PublicLayout