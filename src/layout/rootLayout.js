import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className=" bg-gradient-to-br from-fuchsia-500 to-violet-700 h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
};

export default RootLayout;