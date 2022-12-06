import React from "react";

function Nav() {
  return (
    <div className="flex flex-row justify-between items-center w-full h-20 p-4">
      <p className="text-white text-xl font-semibold uppercase">Bank</p>
      <button className="h-14 w-32 rounded-full bg-red-400 text-white text-xl font-semibold">
        Log Out
      </button>
    </div>
  );
}

export default Nav;
