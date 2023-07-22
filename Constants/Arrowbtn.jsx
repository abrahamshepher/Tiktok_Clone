import React from "react";
import Image from "next/image";
const Arrowbtn = ({ ButtonText, onClick }) => {
  return (
    <div>
      <div
        onClick={onClick}
        className=" flex p-1 justify-between items-center bg-contain"
      >
        <p>{ButtonText}</p>
        <Image
          className="cursor-pointer"
          src="/downArrow.png"
          width={10}
          height={10}
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default Arrowbtn;
