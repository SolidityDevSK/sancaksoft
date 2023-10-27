import React, { useContext, useState } from "react";
import ContainerMenu from "./ContainerMenu/ContainerMenu";
import ContainerContent from "./ContainerContent/ContainerContent";
import Details from "./Details/Details";
import { Context } from "@/context/Provider";

const Container = () => {
  const { showServicesDetails } = useContext(Context);
  return (
    <div className="flex h-[470px] border-t-[1px] border-[#1E2D3D]">
      <ContainerMenu />
      <div className="flex-1 lg:w-fit w-full">
        {showServicesDetails ? <Details /> : <ContainerContent />}
      </div>
    </div>
  );
};

export default Container;
