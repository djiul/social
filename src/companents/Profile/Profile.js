import React from "react";
import ava from "../../img/Star.webp";
import Posts from "./Posts/Posts";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <div className="profile">
      <ProfileInfo />
      <Posts postData={props.profilePage.postData} />
    </div>
  );
}

export default Profile;