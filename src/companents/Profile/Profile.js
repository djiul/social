import React from "react";
import ava from "../../img/Star.webp";
import Posts from "./Posts/Posts";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">

      <div className="me">
        <img src={ava} alt="" />
        <h3>Алла Пугачёва</h3>
      </div>

      <Posts />

    </div>
  );
}

export default Profile;