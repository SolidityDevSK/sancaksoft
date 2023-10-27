import React, { useContext } from "react";
import ContainerCard from "../ContainerCard/ContainerCard";

import { Context } from "@/context/Provider";

import { content } from "./content";

const ContainerContent = () => {
  const { selectProjectsMenu } = useContext(Context);

  const newData = selectProjectsMenu.text
    ? content.filter((i) => i.language == selectProjectsMenu.text)
    : content;

  return (
    <div className="grid mx-auto xl:grid-cols-4 lg:grid-cols-3 w-full md:grid-cols-3 grid-cols-1 relative overflow-y-auto h-full gap-3 lg:px-8 pt-5 pb-10">
      {newData.map((i, k) => (
        <ContainerCard key={k} content={i} />
      ))}
    </div>
  );
};

export default ContainerContent;
