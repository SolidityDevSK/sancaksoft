import Link from "next/link";
import React from "react";

const LeftComponent = () => {
  return (
    <div className="flex h-full my-auto items-center justify-center">
      <div className="text-white m-auto">
        <h1>
          <p className="lg:text-[14px] text-[12px]">
            Profesyonel bir ekibiz ve size yardımcı olmak için buradayız.
          </p>
          <p className="lg:text-6xl md:text-5xl lg:mt-0 mt-5 text-2xl">
            sancakSoft
          </p>
          <p className="text-[#4D5BCE] lg:text-3xl md:text-xl text-lg">
            {"> Tasarımcılar ve Geliştiriciler"}
          </p>
          <div className="lg:mt-12 mt-4 lg:text-base md:text-sm text-xs">
            <p className="text-[#607B96]">
              {"// Dijital dünyadaki çözüm ortağınız"}
            </p>
            <p className="text-[#607B96]">
              {"// Sürekli Gelişen Dünyada Sınırsız İmkanlar"}
            </p>
            <p>
              <span className="text-[#4D5BCE]">Mevcut </span>
              <span className="text-[#43D9AD]">teknolojik araçlar </span>
              <span className="text-white]">= </span>
              <span className="text-[#E99287]">{'"ve metodolojiler"'}</span>
            </p>
          </div>
        </h1>
        <Link
          href="/services"
          className="bg-[#FEA55F] md:text-sm text-xs cursor-pointer hover:bg-[white] rounded-lg lg:mt-9 mt-5 lg:w-[360px] w-[290px] text-black font-medium h-[40px] justify-center flex items-center text-center"
        >
          <p>{"< Geliştirme Hizmetlerimizi Keşfedin / >"}</p>
        </Link>
      </div>
    </div>
  );
};

export default LeftComponent;
