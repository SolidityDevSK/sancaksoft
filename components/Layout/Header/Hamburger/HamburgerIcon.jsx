import React from "react";
import { Pivot as Hamburger } from "hamburger-react";

const HamburgerIcon = ({ isOpen, setOpen }) => {
  return (
    <div className="text-white lg:hidden flex relative z-20">
      <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
    </div>
  );
};

export default HamburgerIcon;
