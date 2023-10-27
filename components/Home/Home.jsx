import React from "react";
import LeftComponent from "./LeftComponent/LeftComponent";
import RightComponent from "./RightComponent/RightComponent";

const Home = () => {
  return (
    <div className="grid h-full flex-grow sm:grid-cols-2 grid-cols-1 lg:mx-20 md:mx-8 mx-4">
      <LeftComponent />
      <RightComponent />
    </div>
  );
};

export default Home;
