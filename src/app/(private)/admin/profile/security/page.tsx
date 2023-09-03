import Title from "@/components/Layout/Title"
import ProfileCaution from "@/components/Profile/ProfileCaution"
import SecurityForm from "@/components/Profile/SecurityForm"

const SecurityPage = () => {
  return (
    <div className="p-8">
        <ProfileCaution
        message="Changing your password will require you to log in again on all devices. Please ensure you remember the new password to avoid any inconvenience"
        />
        <Title type="level3" color="primary" >
            update security credentials
        </Title>
        <SecurityForm/>
    </div>
  )
}

export default SecurityPage