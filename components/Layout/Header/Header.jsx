import React, { useState } from "react";
import { EndBar, HamburgerIcon, Logo, Menu, Topbar } from ".";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="h-[80px] bg-[#010c15] z-20">
      <div className="pt-8 xl:mx-12 px-2 justify-between border-b-[1px] border-[#1E2D3D] flex">
        <div className="flex justify-between w-full">
          <div className="flex">
            <Logo />
            <Menu />
          </div>
          <div>
            <HamburgerIcon isOpen={isOpen} setOpen={setOpen} />
          </div>
        </div>
        <div className="mb-2">
          <EndBar />
        </div>
      </div>
      <Topbar isOpen={isOpen} />
    </div>
  );
};

export default Header;
