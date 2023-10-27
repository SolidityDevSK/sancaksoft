import Image from "next/image";
import React, { useContext } from "react";
import { SiSolidity, SiCsharp, SiAzuredevops } from "react-icons/si";
import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { GiImperialCrown } from "react-icons/gi";
import { Context } from "@/context/Provider";

const containerMenu = [
  {
    text: "Ömer Yenidünya",
    path: "Ceo",
    icon: <GiImperialCrown />,
  },
  {
    text: "Serdar Kayacı",
    path: "Solidity",
    icon: <SiSolidity />,
  },
  // {
  //   text: "Gökhan Kuruçay",
  //   path: "Unity",
  //   icon: <FaUnity />,
  // },
  // {
  //   text: "Fettah Kurtuluş",
  //   path: "Java",
  //   icon: <FaJava />,
  // },
  {
    text: "Emre Kaya",
    path: "Devops",
    icon: <SiAzuredevops />,
  },
  {
    text: "Burak Demir",
    path: "C#",
    icon: <SiCsharp />,
  },
  {
    text: "Ali Efe Öztürk",
    path: "Reactjs",
    icon: <FaReact />,
  },
  // {
  //   text: "Muhammed Palazli",
  //   path: "Unity",
  //   icon: <FaUnity />,
  // },
  {
    text: "Ayşe Ferda Yılmaz",
    path: "Nodejs",
    icon: <FaNodeJs />,
  },
  {
    text: "Zeynep Buse Tanca",
    path: "Figma",
    icon: <FiFigma />,
  },
  {
    text: "Serkan Aksoy",
    path: "Reactjs",
    icon: <FaReact />,
  },
  {
    text: "Veysel Yenilmez",
    path: "Python",
    icon: <FaPython />,
  },
];

const ContainerMenu = () => {
  const { setAbout } = useContext(Context);
  return (
    <div className="pt-2 md:block flex flex-shrink-0 md:border-r-[1px] lg:px-4 lg:w-[240px] md:w-[180px] w-full justify-between border-[#1E2D3D]">
      {containerMenu.map((i, k) => (
        <div
          onClick={() => {
            setAbout(i.text);
          }}
          className="text-[#607B96] cursor-pointer my-4 flex text-xs"
          key={k}
        >
          <Image
            className="my-auto md:flex hidden mr-2"
            src="/star.png"
            width={10}
            height={10}
            alt="star"
          />
          <div className="flex my-auto mr-1 text-xl text-[#607B96]">
            {i.icon}
          </div>
          <span className="my-auto md:flex hidden lg:text-[13px] text-[10px]">
            {i.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ContainerMenu;
