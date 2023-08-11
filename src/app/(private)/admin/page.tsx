import Title from "@/components/Layout/Title";
import { store } from "@/store";

const page = () => {
  const state=store.getState().auth 
  console.log({state});
  return (
    <div className="h-screen flex justify-center items-center">
      <Title color="accent" type="level1">
        Welcome  {state.user?.name}
      </Title>
    </div>
  );
};

export default page;
