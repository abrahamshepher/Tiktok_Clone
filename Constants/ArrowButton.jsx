import React from "react";
import Image from "next/image";

const ArrowButton = ({ ButtonText, onClick }) => {
  return (
    <div>
      <div
        onClick={onClick}
        className=" flex p-1 justify-between items-center bg-contain"
      >
        <p>{ButtonText}</p>
        <Image
          className="cursor-pointer"
          src="/rightArrow.png"
          width={10}
          height={10}
          alt="arrow"
        />
      </div>
    </div>
  );
};
export default ArrowButton;
