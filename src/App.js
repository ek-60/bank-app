import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";

import LoggedInPage from "./components/loggedInPage/loggedInPage";
import Main from "./components/loginPage/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="page" element={<LoggedInPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
