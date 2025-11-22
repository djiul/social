import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <div className="navbar">

      
      <NavLink className="navbar-item" to="/Profile">Profile</NavLink>
      <NavLink className="navbar-item" to="/Messages">Messages</NavLink>
      <NavLink className="navbar-item" to="/Users">Users</NavLink>
    </div>
  );
}

export default Navbar;