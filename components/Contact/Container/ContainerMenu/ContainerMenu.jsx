import React from "react";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa";

const ContainerMenu = () => {
  return (
    <div className="pt-2 flex-shrink-0 lg:border-r-[1px] lg:h-[510px] lg:w-[240px] border-[#1E2D3D]">
      <div className="text-[#607B96] flex lg:justify-start justify-center py-2 border-b-[1px] border-[#1E2D3D] text-2xl">
        <div className="flex">
          <FaArrowDown />
          <span className="ml-2 my-auto text-xs">İletişim</span>
        </div>
      </div>
      <div className="text-[#607B96] lg:block flex justify-around py-2 border-b-[1px] border-[#1E2D3D] text-2xl">
        <div className="flex my-2 text-[#C98BDF]">
          <BiMailSend />
          <span className="lg:text-sm text-xs ml-2 my-auto ">
            info@sancaksoft.com
          </span>
        </div>
        <div className="flex my-2 text-[#C98BDF]">
          <BiPhoneCall />
          <span className="lg:text-sm text-xs ml-2 my-auto">
            +90 530 285 0417
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContainerMenu;
