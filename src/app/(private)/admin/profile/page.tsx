import Title from "@/components/Layout/Title";
import ProfileCaution from "@/components/Profile/ProfileCaution";
import ProfileForm from "@/components/Profile/ProfileForm";
import Uploader from "@/components/Profile/Uploader";
import type { Metadata } from "next";

export const metaDate: Metadata = {
  title: "Profile Settings",
};

const ProfileSettingsPage = () => {
  return (
    <div className="p-8">
      <ProfileCaution
      message="Updating your profile information will change the details displayed on your account. Please make sure the information is accurate."
      />
      
      <div className="flex gap-4 items-center max-w-screen-sm">
      <Title type="level2" color="secondary" styles="flex-1">
        personal information
      </Title>
      <Uploader />
      </div>
      <div className="mt-4">
        <ProfileForm/>
      </div>
    </div>
  );
};

export default ProfileSettingsPage;
