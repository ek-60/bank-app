import React from "react";

function Login() {
  return (
    <div className="flex flex-col justify-evenly w-1/3 h-96">
      {/* <div className="flex flex-col items-center">
        <h1 className="text-white text-5xl font-bold tracking-wider uppercase">
          Login
        </h1>
      </div> */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-row items-center h-16 p-2 gap-6">
          <p className="w-32 text-white text-xl font-semibold">ID Number:</p>
          <input
            type="text"
            className="w-72 text-xl p-2 bg-transparent text-white focus:text-white focus:border-b-red-400 focus:border-b-4 focus:outline-none"
            placeholder="Your bank ID number.."
          ></input>
        </div>
        <div className="flex flex-row items-center h-16 p-2 gap-6">
          <p className="w-32 text-white text-xl font-semibold">Password:</p>
          <input
            type="password"
            className="w-72 text-xl p-2 bg-transparent text-white focus:text-white focus:border-b-red-400 focus:border-b-4 focus:outline-none"
            placeholder="Password.."
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

export default Login;

{
  /* <h1 className="text-5xl text-bolder uppercase tracking-wider">Login</h1>
<div className="flex flex-row items-center gap-6">
  <p className="text-xl">ID number:</p>
  <input
    type="text"
    className="form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    //   id="exampleFormControlInput2"
    placeholder="Your bank ID number.."
  ></input>
</div>
<div className="flex flex-row items-center gap-6">
  <p className="text-xl">Password:</p>
  <input
    type="password"
    className="form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    //   id="exampleFormControlInput2"
    placeholder="Password.."
  ></input>
</div>
<div className="flex">
  <button className="w-48 h-20 bg-red-400 text-xl rounded-xl">
    Register
  </button>
</div> */
}
