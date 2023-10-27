import { Context } from "@/context/Provider";
import Image from "next/image";
import React, { useContext } from "react";

import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

const containerMenu = [
  {
    text: "Özel Yazılım Geliştirme",
    path: "specific",
  },
  {
    text: "Python ve Node.js Çözümleri",
    path: "solution",
  },
  {
    text: "Yapay Zeka Çözümleri",
    path: "ai",
  },
  {
    text: "Blockchain Uygulamaları",
    path: "blockchain",
  },
  {
    text: "Oyun Geliştirme",
    path: "game",
  },
  {
    text: "Web Uygulamarı",
    path: "web",
  },
  {
    text: "Mobil Uygulama",
    path: "mobile",
  },
  {
    text: "Veri Tabanı Çözümleri",
    path: "database",
  },
  {
    text: "İçerik Yönetimi",
    path: "content",
  },
];

const ContainerMenu = () => {
  const {
    selectServicesMenu,
    setServicesMenu,
    setServicesDetails,
  } = useContext(Context);

  return (
    <div className="pt-5 md:w-[240px] w-[120px] border-r-[1px] h-full border-[#1E2D3D]">
      {containerMenu.map((i, k) => (
        <div
          onClick={() => {
            setServicesMenu({ text: i.text, path: i.path });
            setServicesDetails("");
          }}
          className={`${
            i.text == selectServicesMenu.text ? "text-white" : "text-[#607B96]"
          }  cursor-pointer mb-4 flex lg:text-xs text-[9px]`}
          key={k}
        >
          <div className="flex items-center mr-2">
            {i.text == selectServicesMenu.text ? (
              <AiTwotoneStar className="text-white" />
            ) : (
              <AiOutlineStar />
            )}
          </div>
          <span>{i.text}</span>
        </div>
      ))}
    </div>
  );
};

export default ContainerMenu;
