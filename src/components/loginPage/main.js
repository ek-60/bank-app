import React, { useState } from "react";
import Login from "./loginForm";
import SignUp from "./signUpForm";

function Main() {
  const [showLogin, setShowLogin] = useState(true);
  const [showSign, setShowSing] = useState(false);

  function clickLogin() {
    setShowSing(false);
    setShowLogin(true);
  }

  function clickSignUp() {
    setShowSing(true);
    setShowLogin(false);
  }

  return (
    <div className="flex justify-center itemes-center h-screen w-full bg-slate-900">
      <div className="flex flex-col justify-center items-center w-2/3 h-full gap-12">
        <h1 className="text-7xl text-white font-bold tracking-wider">
          Welcome to your Bank.
        </h1>
        <div className="flex flex-row w-96 h-20 items-center p-1 gap-3 border-2 border-gray-400  rounded-full">
          {showLogin && (
            <>
              <button
                className="h-16 w-48 rounded-full text-center bg-green-800"
                onClick={clickLogin}
              >
                <p className="text-2xl text-white font-semibold tracking-wide">
                  Login
                </p>
              </button>
              <button
                className="h-16 w-48 bg-transparent rounded-full text-center"
                onClick={clickSignUp}
              >
                <p className="text-2xl text-white font-semibold tracking-wide">
                  Sign Up
                </p>
              </button>
            </>
          )}
          {showSign && (
            <>
              <>
                <button
                  className="h-16 w-48 rounded-full text-center bg-transparent"
                  onClick={clickLogin}
                >
                  <p className="text-2xl text-white font-semibold tracking-wide">
                    Login
                  </p>
                </button>
                <button
                  className="h-16 w-48 rounded-full text-center bg-red-800"
                  onClick={clickSignUp}
                >
                  <p className="text-2xl text-white font-semibold tracking-wide">
                    Sign Up
                  </p>
                </button>
              </>
            </>
          )}
        </div>
        {showLogin && <Login />}
        {showSign && <SignUp />}
      </div>
    </div>
  );
}

export default Main;
