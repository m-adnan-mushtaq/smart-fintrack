import Title from "@/components/Layout/Title";
import ProfileForm from "@/components/Profile/ProfileForm";
import Uploader from "@/components/Profile/Uploader";
import type { Metadata } from "next";

export const metaDate: Metadata = {
  title: "Profile Settings",
};

const ProfileSettingsPage = () => {
  return (
    <div className="p-8">
      <div className="flex gap-4 items-center">
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