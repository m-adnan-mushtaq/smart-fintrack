import Title from "@/components/Layout/Title";
import SupportFrom from "@/components/Support/Form";
import Wave from "@/components/svg/WaveSvg";
import { sendSupportEmail } from "@/lib/actions";

const supportInfo = [
  {
    title: "email",
    value: "madnandeveloper@gmail.com",
    Svg: (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-16 h-16"
    >
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
    ),
  },
  {
    title: "phone",
    value: "+92 3089023002",
    Svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-16 h-16"
      >
        <path d="M8 16.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z" />
        <path
          fillRule="evenodd"
          d="M4 4a3 3 0 013-3h6a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V4zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V2.5h1A1.5 1.5 0 0114.5 4v12a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 16V4A1.5 1.5 0 017 2.5h1z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "address",
    value: "faisalabad, punjab, pakistan",
    Svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-16 h-16">
      <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" />
    </svg>
    
    ),
  },
];

const SupportPage = () => {
  return (
    <div>
      <div className="w-screen overflow-hidden">
        <Wave />
      </div>
      <div className="max-w-screen-md px-4 text-center w-full mx-auto my-4">
        <Title color="primary" type="level1">
          reach us
        </Title>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4  mt-8 ">
          {supportInfo.map((card) => (
            <div
              key={card.title}
              className="bg-neutral shadow-lg p-8 rounded flex gap-4 flex-col items-center "
            >
             {card.Svg}
              <h1 className="text-2xl text-slate-400 uppercase ">{card.title}</h1>
              <p className="lowercase text-sm">{card.value}</p>
            </div>
          ))}
        </div>
        <SupportFrom/>
      </div>
    </div>
  );
};

export default SupportPage;
