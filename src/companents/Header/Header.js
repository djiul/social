import React from "react";
import logo from "../../img/Person_icon_BLACK-01.svg.png";
import "./Header.css";

function Header() {
  return (
    <div className='header'>
      <img src={logo} alt="" />
      <h1>Social Media</h1>
    </div>
  );
}

export default Header ;