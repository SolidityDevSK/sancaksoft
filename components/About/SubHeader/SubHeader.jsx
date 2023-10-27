import { Context } from "@/context/Provider";
import React, { useContext } from "react";
import { FaArrowDown } from "react-icons/fa";

const SubHeader = () => {
  const { selectAbout, setAbout } = useContext(Context);
  return (
    <div className="flex h-[50px]">
      <div className="flex items-center py-2 border-r-[1px] px-4 lg:w-[240px] md:w-[180px] w-[120px] text-white border-[#1E2D3D]">
        <FaArrowDown className="lg:text-sm text-xs" />
        <span className="ml-2 lg:text-xs text-[10px]">Takımımız</span>
      </div>
      <div className="flex items-center w-[116px] border-r-[1px] border-[#1E2D3D] pr-4 py-2 pl-4 text-center">
        <p className="text-[#607B96] lg:text-xs text-[10px]">Biz Kimiz ?</p>
      </div>
      <div className="flex items-center ml-4">
        <p className="text-[#607B96] lg:text-xs text-[10px]">{selectAbout}</p>
        <span
          onClick={() => {
            setAbout("SancakSoft");
          }}
          className="cursor-pointer text-[#607B96] ml-3"
        >
          {selectAbout !== "SancakSoft" ? "x" : ""}
        </span>
      </div>
    </div>
  );
};

export default SubHeader;
