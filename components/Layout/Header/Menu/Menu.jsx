import { Context } from "@/context/Provider";
import Link from "next/link";
import React, { useContext, useState } from "react";

const MenuData = [
  { text: "AnaSayfa", path: "/" },
  { text: "Servisler", path: "/services" },
  { text: "Yaptıklarımız", path: "/projects" },
  { text: "Hakkımızda", path: "/about" },
  { text: "İletişim", path: "/contact" },
];

const Menu = () => {
  const { selectMenu, setMenu } = useContext(Context);
  return (
    <div className="lg:flex hidden items-center">
      {MenuData.map((i, k) => (
        <div
          key={k}
          className={`${
            selectMenu == i.text ? "border-b-[#FEA55F]" : "border-b-transparent"
          } border-r-[1px] border-b-[3px] h-full flex items-center border-r-[#1E2D3D] text-[12px] xl:px-6 lg:px-4 md:px-2`}
        >
          <Link
            onClick={() => {
              setMenu(i.text);
            }}
            className={`text-[#607B96]`}
            href={i.path}
          >
            {i.text}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
