import Link from "next/link";
import React from "react";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const MenuData = [
  { text: "AnaSayfa", path: "/" },
  { text: "Servisler", path: "/services" },
  { text: "Yaptıklarımız", path: "/projects" },
  { text: "Hakkımızda", path: "/about" },
  { text: "İletişim", path: "/contact" },
];
const Topbar = ({ isOpen }) => {
  return (
    <div
      className={`${
        poppins.className
      } lg:hidden z-10 bg-black py-32 w-screen transition-all h-screen ease-in-out duration-300 block absolute ${
        isOpen ? "top-0" : "-top-[900px]"
      } left-1/2 transform -translate-x-1/2`}
    >
      <div className="text-center text-[12px] text-[#607B96]">
        {MenuData.map((i, k) => (
          <Link className="block hover:text-white my-6" href={i.path} key={k}>
            {i.text}
          </Link>
        ))}
      </div>
      <Link
        href="https://api.whatsapp.com/send?phone=905302850417&amp;textMerhaba+bir+fikrim+var"
        target="_blank"
        className="flex h-[40px]"
      >
        <div className="w-[150px] m-auto mt-12 h-[40px] flex justify-center items-center bg-[#3c9a9583] border-transparent hover:bg-transparent hover:text-white cursor-pointer border-[2px] hover:border-[#00fff0] transition-all ease-linear duration-75 rounded-[9px]">
          <span
            className={`${poppins.className} text-[#e7ccd5] font-medium m-auto`}
          >
            Teklif Al
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Topbar;
