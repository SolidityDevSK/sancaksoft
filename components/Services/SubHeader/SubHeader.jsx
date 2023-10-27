import { Context } from "@/context/Provider";
import React, { useContext } from "react";
import { FaArrowDown } from "react-icons/fa";

const SubHeader = () => {
  const {
    selectServicesMenu,
    setServicesMenu,
    setServicesDetails,
    showServicesDetails,
  } = useContext(Context);

  return (
    <div className="flex h-[50px]">
      <div className="flex items-center py-2 border-r-[1px] px-4 flex-shrink-0 md:w-[240px] w-[120px] text-white border-[#1E2D3D]">
        <FaArrowDown className="lg:text-xs text-[9px]" />
        <span className="ml-2 lg:text-xs text-[9px]">Hizmetlerimiz</span>
      </div>
      <div className="flex items-center  pr-4 py-2 pl-4 text-center">
        <p className="text-[#607B96] lg:text-xs text-[9px]">
          Geliştirme Hizmetlerimizi Keşfedin
        </p>
      </div>
      <div className="lg:flex hidden items-center lg:text-xs text-[9px] border-l-[1px] border-[#1E2D3D] py-2 lg:pl-4 pl-1 text-center">
        <span className="text-[#607B96]">{selectServicesMenu.text}</span>
        <span
          onClick={() => {
            setServicesMenu({ text: "", path: "" });
            setServicesDetails("");
          }}
          className="cursor-pointer text-[#607B96] ml-3"
        >
          {selectServicesMenu.text !== "" ? "x" : ""}
        </span>
        {showServicesDetails && (
          <div className="lg:flex items-center hidden">
            <span className="mx-4 text-2xl bg-[#1E2D3D] rotate-12 h-[40px] w-[1px]">
              {" "}
            </span>
            <span className="text-[#607B96]">{showServicesDetails}</span>
            <span
              onClick={() => {
                setServicesDetails("");
              }}
              className="cursor-pointer text-[#607B96] ml-3"
            >
              {showServicesDetails !== "" ? "x" : ""}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubHeader;
