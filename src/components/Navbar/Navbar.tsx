import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img className="navbar__logo" alt="logo" src={logo} />
      </div>
      <div className="navbar-right">
        <Link to="#timeline">Timeline</Link>
      </div>
    </nav>
  );
};

export default Navbar;
