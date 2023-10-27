import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";

const firaCode = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const EndBar = () => {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=905302850417&amp;textMerhaba+bir+fikrim+var"
      className="flex h-[40px]"
    >
      <div className="lg:flex hidden xl:w-[160px] w-[135px] bg-[#3c9a9583] border-transparent hover:bg-transparent hover:text-white cursor-pointer endBtn border-[2px] hover:border-[#00fff0] transition-all ease-linear duration-75 rounded-[9px] mr-[10px]">
        <span
          className={`${firaCode.className} text-[#e7ccd5] font-medium m-auto`}
        >
          Teklif Al
        </span>
      </div>
    </Link>
  );
};

export default EndBar;
