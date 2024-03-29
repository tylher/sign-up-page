import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={"flex justify-between items-center px-9 h-[10vh]"}>
      <h2 className="text-white ">LOGO</h2>
      <nav className={"text-white flex items-center gap-3"}>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </nav>
    </div>
  );
};

export default Header;
