import { Context } from "@/context/Provider";
import Image from "next/image";
import React, { useContext } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const ContainerCard = ({ content }) => {
  const { setServicesMenu, setServicesDetails } = useContext(Context);

  return (
    <div className={`mx-auto lg:w-[220px] w-[180px] ${inter.className}`}>
      <Image
        className="rounded-t-3xl"
        src={content.img.src}
        alt={content.img.alt}
        width={300}
        height={200}
      />
      <div className="relative lg:h-[210px] h-[180px] flex justify-around flex-col px-2 rounded-b-xl py-2 bg-[#222458]">
        <h3 className="flex text-white lg:text-xs text-[11px] font-bold opacity-70">
          <span className="bg-[#F4AE61] h-3 w-3 my-auto mr-2 rounded-full">
            {" "}
          </span>
          {content.mainContent.header}
        </h3>
        <div className="h-[150px] flex">
          <p className="text-[grey]  my-auto font-medium lg:text-xs text-[10px]">
            {content.mainContent.main}
          </p>
        </div>
        <div className="mx-auto">
          <button
            onClick={() => {
              setServicesDetails(content.img.alt);
              setServicesMenu({ text: content.mainContent.header, path: "" });
            }}
            className="mt-5 w-fit lg:text-xs text-[10px] rounded-full mx-auto mb-2 px-8 py-3 font-semibold detailsBtnBg text-white"
          >
            <span className="font-medium">daha fazla bilgi</span>
          </button>
          <div className="flex">
            <span className="w-24 mx-auto lg:h-1 h-[2px] rounded-2xl bg-[#FEA55F]">
              {""}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCard;
