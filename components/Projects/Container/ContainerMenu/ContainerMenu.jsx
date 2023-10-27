import Image from "next/image";
import React, { useContext } from "react";
import { DiReact } from "react-icons/di";
import { SiSolidity, SiCsharp } from "react-icons/si";
import { FaJava, FaUnity, FaPython } from "react-icons/fa";
import { Context } from "@/context/Provider";

const containerMenu = [
  {
    text: "Solidity",
    path: "Solidity",
    icon: <SiSolidity />,
  },
  {
    text: "Java",
    path: "Java",
    icon: <FaJava />,
  },
  {
    text: "Unity",
    path: "Unity",
    icon: <FaUnity />,
  },
  {
    text: "Python",
    path: "Python",
    icon: <FaPython />,
  },
  {
    text: "C#",
    path: "C#",
    icon: <SiCsharp />,
  },
  {
    text: "Reactjs",
    path: "Reactjs",
    icon: <DiReact />,
  },
];
const ContainerMenu = () => {
  const { setProjectsMenu } = useContext(Context);
  return (
    <div className="pt-5 md:w-[240px] w-[120px] border-r-[1px] h-full border-[#1E2D3D]">
      {containerMenu.map((i, k) => (
        <div
          onClick={() => {
            setProjectsMenu({ text: i.text, path: i.text });
          }}
          className="text-[#607B96] cursor-pointer my-4 flex text-xs"
          key={k}
        >
          <Image
            className="my-auto mr-2"
            src="/star.png"
            width={10}
            height={10}
            alt="star"
          />
          <div className="flex my-auto mr-1 text-xl">{i.icon}</div>
          <span className="my-auto">{i.text}</span>
        </div>
      ))}
    </div>
  );
};

export default ContainerMenu;
