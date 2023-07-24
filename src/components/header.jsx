import React from "react";
import { NavLink } from "react-router-dom";
import SignUp from "./signup";

const Header = () => {
  return (
    <div>
      <h2>LOGO</h2>
      <nav>
        <NavLink to={<Login />}>Login</NavLink>
        <NavLink to={<SignUp />}>Signup</NavLink>
      </nav>
    </div>
  );
};

export default Header;
