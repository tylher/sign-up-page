import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";

const RootLayout = () => {
  return (
    <div className=" bg-gradient-to-br from-fuchsia-500 to-violet-700 min-h-screen ">
      <Header />
      <div className="flex items-center justify-center min-h-[90vh]">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
