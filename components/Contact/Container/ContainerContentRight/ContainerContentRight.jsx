import { Context } from "@/context/Provider";
import React, { useContext } from "react";

const ContainerContentRight = () => {
  const { inputValues, handleInputChange } = useContext(Context);
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <div className="w-full lg:flex hidden">
      <ul type="1" className="m-auto text-[#607B96] text-sm ml-5">
        <li className="flex">
          <span className="w-[30px]">1</span>
          <div className="">
            <span className="text-[#C98BDF]">const </span>
            <span className="text-[#5565E8]">button</span>
            <span className="text-[#607B96]"> = </span>
            <span className="text-[#5565E8]">document.querySelector</span>
            <span className="text-[#607B96]">{"("}</span>
            <span className="text-[#FEA55F]">{"'#sendBtn'"}</span>
            <span className="text-[#607B96]">{")"}</span>
            <span className="text-[#607B96]">;</span>
          </div>
        </li>
        <li className="flex">
          <span className="w-[30px]">2</span>
          <span></span>
        </li>
        <li className="flex">
          <span className="w-[30px]">3</span>
          <div>
            <span className="text-[#C98BDF]">const </span>
            <span className="text-[#5565E8]">message</span>
            <span>=</span>
            <span>{"{"}</span>
          </div>
        </li>
        <li className="flex">
          <span className="w-[30px]">4</span>
          <span className="ml-5 text-[#5565E8]">name: </span>
          <span className="pl-1">
            {inputValues.name ? inputValues.name : ""}
          </span>
        </li>
        <li className="flex">
          <span className="w-[30px]">5</span>
          <span className="ml-5 text-[#5565E8]">email: </span>
          <span className="pl-1">
            {inputValues.email ? inputValues.email : ""}
          </span>
        </li>
        <li className="flex">
          <span className="w-[30px]">6</span>
          <span className="ml-5 text-[#5565E8]">phone: </span>
          <span className="pl-1">
            {inputValues.phone ? inputValues.phone : ""}
          </span>
        </li>
        <li className="flex">
          <span className="w-[30px]">7</span>
          <span className="ml-5 text-[#5565E8]">message: </span>
          <span className="w-[400px] break-words pl-1">
            {inputValues.message ? inputValues.message : ""}
          </span>
        </li>
        <li className="flex">
          <span className="w-[30px]">8</span>
          <span className="ml-5 text-[#5565E8]">date: </span>
          <span className="pl-1">{formattedDate}</span>
        </li>
        <li className="flex">
          <span className="w-[30px]">9</span>
          <span>{"}"}</span>
        </li>
        <li className="flex">
          <span className="w-[30px]">10</span>
          <span></span>
        </li>
        <li className="flex">
          <span className="w-[30px]">11</span>
          <span>{"button.addEventListener("}</span>
          <span className="text-[#FEA55F]">{'"click"'}</span>
          <span>{", () => {"}</span>
        </li>
        <li className="flex">
          <span className="w-[30px]">12</span>
          <span className="ml-5 text-[#5565E8]"> form.send(message)</span>
        </li>
        <li className="flex">
          <span className="w-[30px]">13</span>
          <span>{"})"}</span>
        </li>
      </ul>
    </div>
  );
};

export default ContainerContentRight;
