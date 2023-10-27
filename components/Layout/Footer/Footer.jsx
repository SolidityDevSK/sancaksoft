import React from "react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-[50px] absolute bottom-0 w-full">
      <div className="flex xl:mx-12 mx-2 border-t-[1px] rounded-b-lg bg-[#011627] h-[40px] border-[#1e2d3d] items-center text-[#607B96]">
        <div className="border-r-[1px] h-full flex border-[#1e2d3d]">
          <span className="px-2 text-sm my-auto">bizi takip edin</span>
        </div>
        <div className="border-r-[1px] h-full items-center flex border-[#1e2d3d]">
          <span className="px-3 text-xl">
            <FaTwitter />
          </span>
        </div>
        <div className="border-r-[1px] h-full items-center flex border-[#1e2d3d]">
          <span className="px-3 text-xl">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
