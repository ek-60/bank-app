import React from "react";
import LoggedInPage from "./components/loggedInPage/loggedInPage";
import Main from "./components/loginPage/main";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-slate-900">
      {/* <Main /> */}
      <LoggedInPage />
    </div>
  );
}

export default App;
