import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";

const RootLayout = () => {
  return (
    <div className=" bg-gradient-to-br from-fuchsia-500 to-violet-700 min-h-screen pb-5 ">
      <Header />
      <div className="flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
