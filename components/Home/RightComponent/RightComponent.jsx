import Image from "next/image";
import React from "react";

const RightComponent = () => {
  return (
    <div className="relative h-full overflow-y-hidden">
      <div className="sm:absolute mx-auto sm:block flex sm:top-1/2 transform sm:-translate-y-1/2 z-1">
        <Image
          className="lg:my-5 sm:flex hidden my-2"
          src="/code1.png"
          alt="code"
          width={560}
          height={110}
        />
        <Image
          className="lg:my-5 my-2"
          src="/code2.png"
          alt="code"
          width={560}
          height={110}
        />
        <Image
          className="lg:my-5 sm:flex hidden my-2"
          src="/code1.png"
          alt="code"
          width={560}
          height={110}
        />
      </div>
    </div>
  );
};

export default RightComponent;
