import React, { useContext } from "react";
import ContainerCard from "../ContainerCard/ContainerCard";
import { Context } from "@/context/Provider";
import { content } from "./content";

const ContainerContent = () => {
  const { selectServicesMenu } = useContext(Context);
  const newData = selectServicesMenu.text
    ? content.filter((i) => i.mainContent.header == selectServicesMenu.text)
    : content;

  return (
    <div className="grid mx-auto xl:grid-cols-4 lg:grid-cols-3 w-full md:grid-cols-3 grid-cols-1 relative overflow-y-auto h-full gap-3 lg:px-8 pt-5 pb-10">
      {newData.map((i, k) => (
        <ContainerCard content={i} key={k} />
      ))}
    </div>
  );
};

export default ContainerContent;
