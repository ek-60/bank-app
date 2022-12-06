import React from "react";

function Card() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="flex flex-col h-[220px] w-[380px] bg-red-400 rounded-lg">
        <div className="flex flex-col w-full h-full gap-4 p-2">
          <p className="text-2xl text-white font-semibold tracking-wide">
            First Name
          </p>
          <p className="text-2xl text-white font-semibold tracking-wide">
            Last Name
          </p>
        </div>
        <div className="flex flex-col items-end p-2">
          <p className="text-2xl text-white font-semibold tracking-wide">
            123 456 789
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
