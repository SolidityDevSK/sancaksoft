import React from "react";
import ContainerMenu from "./ContainerMenu/ContainerMenu";
import ContainerContent from "./ContainerContent/ContainerContent";

const Container = () => {
  return (
    <div className="flex h-[470px] border-t-[1px] border-[#1E2D3D]">
      <ContainerMenu />
      <div className="flex lg:w-fit w-full">
        <ContainerContent />
      </div>
    </div>
  );
};

export default Container;
