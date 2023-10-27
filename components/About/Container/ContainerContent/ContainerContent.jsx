import React, { useContext } from "react";
import { Context } from "@/context/Provider";
import { content } from "./content";

const ContainerContent = () => {
  const { selectAbout } = useContext(Context);

  return (
    <div className="relative overflow-y-auto md:h-[450px] gap-3 lg:px-8 md:mt-5">
      <ul
        type="1"
        className="text-[#607B96] md:flex hidden flex-col lg:text-sm md:text-xs text-[9px] lg:ml-5 ml-3"
      >
        {content[selectAbout].desciription.map((i, k) => (
          <li key={k} className="flex">
            <span className="w-[50px]"> {k + 1}</span>
            <span>{i}</span>
          </li>
        ))}
      </ul>
      <ul className="text-[#607B96] md:hidden block text-[12px] ml-3">
        <div className="flex justify-center">
          <h4 className="text-white text-[14px] pb-2">{selectAbout}</h4>
        </div>
        {content[selectAbout].desciription.map((i, k) => (
          <span key={k}>
            {i
              .replace(/\*/g, "")
              .replace(/\s+/g, " ")
              .replace(/\//g, "")
              .replace(/\\/g, "")}
          </span>
        ))}
      </ul>
    </div>
  );
};

export default ContainerContent;
