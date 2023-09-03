import Title from "@/components/Layout/Title";
import ProfileCaution from "@/components/Profile/ProfileCaution";
import VerificationForm from "@/components/Profile/VerificationForm";

const page = () => {
  return (
    <section className="p-8">
      <ProfileCaution message="If you update your email address, all reminders and notifications will be canceled, and you will be logged out. You'll need to sign in again with your new email address. Make sure you still want to proceed." />
      <Title color="secondary" type="level2" styles="mb-8">
        Update Existing Email
      </Title>
      <VerificationForm />
    </section>
  );
};

export default page;
