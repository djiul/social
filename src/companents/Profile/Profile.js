import React from "react";
import ava from "../../img/Star.webp";
import Posts from "./Posts/Posts";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let messages = [
    { message: "Hi", id: 1 },
    { message: "How are you?", id: 2 },
    { message: "Nice to meet you!", id: 3 },
    { message: "I am hungry.", id: 4 },
]

function Profile() {
  return (
    <div className="profile">
      <ProfileInfo />
      <Posts messages={messages} />
    </div>
  );
}

export default Profile;