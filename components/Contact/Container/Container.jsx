import React from "react";
import ContainerMenu from "./ContainerMenu/ContainerMenu";
import ContainerContentLeft from "./ContainerContentLeft/ContainerContentLeft";
import ContainerContentRight from "./ContainerContentRight/ContainerContentRight";

const Container = () => {
  return (
    <div className="flex lg:flex-row flex-col">
      <ContainerMenu />
      <div className="w-full flex">
        <ContainerContentLeft />
        <ContainerContentRight />
      </div>
    </div>
  );
};

export default Container;
