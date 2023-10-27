import { Context } from "@/context/Provider";
import React, { useContext } from "react";
import { FaArrowDown } from "react-icons/fa";

const SubHeader = () => {
  const {
    selectProjectsMenu,
    setProjectsMenu,
    showProjectsDetails,
  } = useContext(Context);
  return (
    <div className="flex h-[50px]">
      <div className="flex items-center py-2 border-r-[1px] px-4 md:w-[240px] w-[120px] text-white border-[#1E2D3D]">
        <FaArrowDown />
        <span className="md:ml-2 text-xs">Projeler</span>
      </div>
      <div className="flex items-center  pr-4 py-2 pl-4 text-center">
        <p className="text-[#607B96] text-xs">Bizim Yaptıklarımız</p>
      </div>
      <div className="flex items-center text-xs border-l-[1px] border-[#1E2D3D] py-2 pl-4 text-center">
        <span className="text-[#607B96]">{selectProjectsMenu.text}</span>
        <span
          onClick={() => {
            setProjectsMenu({ text: "", path: "" });
          }}
          className="cursor-pointer text-[#607B96] ml-3"
        >
          {selectProjectsMenu.text !== "" ? "x" : ""}
        </span>
        {showProjectsDetails && (
          <div className="flex items-center">
            <span className="mx-4 text-2xl bg-[#1E2D3D] rotate-12 h-[40px] w-[1px]">
              {" "}
            </span>
            <span className="text-[#607B96]">{showProjectsDetails}</span>
            <span className="cursor-pointer text-[#607B96] ml-3">
              {showProjectsDetails !== "" ? "x" : ""}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubHeader;
