import React, { useContext } from "react";
import SubHeader from "./SubHeader/SubHeader";
import Container from "./Container/Container";
import { Context } from "@/context/Provider";

const About = () => {
  const { selectAbout } = useContext(Context);

  return (
    <div className="xl:mx-12 contentHeight mx-2">
      <SubHeader />
      <Container />
    </div>
  );
};

export default About;
