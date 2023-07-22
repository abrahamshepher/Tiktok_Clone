import React from "react";

function About({ ButtonText, onClick }) {
  return (
    <div>
      <div
        onClick={onClick}
        className=" flex p-1 justify-between items-center bg-contain"
      >
        <p>{ButtonText}</p>
      </div>
    </div>
  );
}

export default About;
