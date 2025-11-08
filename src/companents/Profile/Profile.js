import React from "react";
import "./Profile.css";
import ava from "../../img/Star.webp";


function Profile() {
  return (
    <div className="profile">
      <div className="me">
        <img src={ava} alt="" />
        <h3>Алла Пугачёва</h3>
      </div>
      <div className="posts">
        <input type="text"  placeholder="Enter the post"/>
        <button>Post</button>
        <div className="post">
          <img src={ava} alt="" />
          <span>Алла Пугачёва</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi repellendus accusantium debitis odit cupiditate aspernatur recusandae, sequi quas sunt. Nostrum, possimus beatae non quibusdam facere neque deserunt esse ut.</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;