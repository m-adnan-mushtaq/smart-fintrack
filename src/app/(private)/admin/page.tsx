import Title from "@/components/Layout/Title";
import { store } from "@/store";

const page = () => {
  const {user}=store.getState().auth  
  return (
    <div className="h-screen flex justify-center items-center">
      <Title color="accent" type="level1">
        Welcome {user?.name}
      </Title>
    </div>
  );
};

export default page;
