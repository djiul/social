import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <a className="navbar-item" href="">Profile</a>
      <a className="navbar-item" href="">Messages</a>
      <a className="navbar-item" href="">Users</a>
    </div>
  );
}

export default Navbar;