import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="flex relative z-20 lg:w-[232px] w-[180px] border-r-[1px] border-r-[#1E2D3D]">
      <Link className="w-full flex justify-around" href="/">
        <div className="w-[60px] absolute left-0 bottom-0">
          <Image src="/lastlogo.png" width={60} height={150} alt="sancaksoft" />
        </div>
        <div className="flex ml-auto items-center border-b-[3px] border-b-transparent cursor-default h-full text-[13px] lg:px-6 px-2">
          <p className="text-[#607B96] my-auto">#sancak-soft</p>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
