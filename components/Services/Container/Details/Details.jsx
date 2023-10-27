import { Context } from "@/context/Provider";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { content } from "./content";
// import { Hind_Siliguri } from "next/font/google";

// const hindSiliguri = Hind_Siliguri({ subsets: ["latin"], weight: "400" });

// const Details = () => {
//   const { showServicesDetails } = useContext(Context);

//   const [isOpen, setOpen] = useState(0);

//   const toggleOpen = (k) => {
//     setOpen(k);
//   };

//   const colors = [
//     "bg-[#003947]",
//     "bg-[#006B6C]",
//     "bg-[#2A9E7A]",
//     "bg-[#8ACF75]",
//     "bg-[#8B7356]",
//   ];

//   return (
//     <div
//       className={`${montserrat.className} relative md:block flex flex-col h-[65vh] justify-around`}
//     >
//       <div className="lg:grid flex lg:mx-5 ml-3 flex-col grid-cols-5 mt-4 lg:gap-10 gap-5 text-white lg:text-xs text-[10px]">
//         <div className="col-span-3">
//           <p className="text-[#FEA55F] w-fit pb-1">
//             {content[showServicesDetails][isOpen].header.split(":")[0]}
//           </p>
//           <p>{content[showServicesDetails][isOpen].descriptionTop}</p>
//         </div>
//         <div className="col-span-2">
//           <p className="text-[#FEA55F] w-fit pb-1">
//             {content[showServicesDetails][isOpen].header.split(":")[1]}
//           </p>
//           <p>{content[showServicesDetails][isOpen].description}</p>
//         </div>
//       </div>
//       <div className="lg:flex absolute lg:bottom-0 lg:transform lg:translate-x-1/2 hidden lg:justify-center">
//         {content[showServicesDetails].map((i, k) => (
//           <div
//             key={k}
//             className={`${
//               isOpen == k ? "lg:w-80 w-36" : "w-12 relative"
//             } h-56 rounded-3xl py-2 cursor-pointer flex mx-1 ${
//               colors[k]
//             } transition-all duration-300`}
//             onClick={() => toggleOpen(k)}
//           >
//             <p
//               className={` ${
//                 isOpen == k ? "normal-text" : "vertical-text"
//               } m-auto text-[#492F3B] font-bold text-center text-[10px] transition-all duration-300`}
//             >
//               <span>{i.header.split(":")[0]}</span>
//               {isOpen == k && <span>:</span>}
//               {isOpen == k && <p>{i.header.split(":")[1]}</p>}
//             </p>
//           </div>
//         ))}
//       </div>
//       <div className="lg:hidden w-full flex">
//         <div className="w-3/4 mx-auto flex justify-around">
//           {content[showServicesDetails].map((i, k) => (
//             <div
//               onClick={() => setOpen(k)}
//               className={`${
//                 isOpen == k ? "bg-[#FEA55F]" : "bg-none"
//               } text-white p-2 border-[1px] rounded-lg`}
//               key={k}
//             >
//               {k + 1}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

const Details = () => {
  const { showServicesDetails } = useContext(Context);
  const [isOpen, setOpen] = useState(0);

  return (
    <div className="relative overflow-y-auto flex justify-between py-5 flex-col h-full">
      <div
        className={`md:my-4 md:p-2 cursor-pointer flex md:flex-row flex-col mx-1 transition-all duration-300`}
      >
        <Image
          className="md:mx-0 md:w-[250px] mx-auto md:mb-0 mb-4"
          src={content[showServicesDetails][isOpen].img}
          width={150}
          height={230}
          alt="details"
        />
        <div className="flex flex-col justify-between w-full">
          <div className="md:px-4 my-auto">
            <p
              className={`mx-auto mb-2 text-[#FEA55F] md:font-bold text-center md:text-sm text-[10px] transition-all duration-300`}
            >
              <span className="text-[#5565E8]">
                {content[showServicesDetails][isOpen].header.split(":")[0]} /
              </span>
              <span>
                {content[showServicesDetails][isOpen].header.split(":")[1]}
              </span>
            </p>
            <p
              className={`text-[#607B96] mx-auto text-center md:text-xs text-[9px] font-thin transition-all duration-300`}
            >
              {content[showServicesDetails][isOpen].description}
            </p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="md:w-1/4 mx-auto w-2/3 flex justify-around">
          {content[showServicesDetails].map((i, k) => (
            <div
              onClick={() => setOpen(k)}
              className={`${
                isOpen == k ? "bg-[#FEA55F]" : "bg-none"
              } text-white cursor-pointer w-[30px] text-center p-2 border-[1px] rounded-lg`}
              key={k}
            >
              {k + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
