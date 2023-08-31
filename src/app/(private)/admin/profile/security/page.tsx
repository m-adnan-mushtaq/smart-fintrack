import Title from "@/components/Layout/Title"
import SecurityForm from "@/components/Profile/SecurityForm"

const SecurityPage = () => {
  return (
    <div className="p-8">
        <Title type="level3" color="primary" >
            update security credentials
        </Title>
        <SecurityForm/>
    </div>
  )
}

export default SecurityPage