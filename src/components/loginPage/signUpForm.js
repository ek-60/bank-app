import React from "react";

function SignUp() {
  return (
    <div className="flex flex-col justify-evenly w-1/3 h-96">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-row items-center h-16 p-2 gap-6">
          <p className="w-32 text-white text-xl font-semibold">First name:</p>
          <input
            type="text"
            className="w-72 text-xl p-2 bg-transparent text-white focus:text-white focus:border-b-red-400 focus:border-b-4 focus:outline-none"
            placeholder="Your first name.."
          ></input>
        </div>
        <div className="flex flex-row items-center h-16 p-2 gap-6">
          <p className="w-32 text-white text-xl font-semibold">Surename:</p>
          <input
            type="text"
            className="w-72 text-xl p-2 bg-transparent text-white focus:text-white focus:border-b-red-400 focus:border-b-4 focus:outline-none"
            placeholder="Your surename.."
          ></input>
        </div>
        <div className="flex flex-row items-center h-16 p-2 gap-6">
          <p className="w-32 text-white text-xl font-semibold">Password:</p>
          <input
            type="password"
            className="w-72 text-xl p-2 bg-transparent text-white focus:text-white focus:border-b-red-400 focus:border-b-4 focus:outline-none"
            placeholder="Your password.."
          ></input>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="w-32 h-14 p-2 rounded-lg bg-blue-400 text-xl uppercase font-bold tracking-wide">
          login
        </button>
      </div>
    </div>
  );
}

export default SignUp;
