import React from "react";
import Card from "./card";
import Nav from "./nav";

function LoggedInPage() {
  return (
    <div className="flex flex-col items-center h-screen w-full bg-slate-900 gap-12">
      <Nav />
      <div className="flex justify-center items-center flex-col h-full w-2/3">
        <div className="flex flex-col w-full p-2 gap-4">
          <h1 className="text-7xl text-white font-bold tracking-wider">
            Hello, Name
          </h1>
          <p className="text-2xl text-white font-semibold tracking-wide">
            Balance: 100$
          </p>
        </div>
        <Card />
      </div>
    </div>
  );
}

export default LoggedInPage;
