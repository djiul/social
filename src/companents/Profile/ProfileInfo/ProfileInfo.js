import React from "react";
import ava from "../../../img/Star.webp";


function ProfileInfo() {
    return (
        <div className="me">
            <img src={ava} alt="" />
            <h3>Алла Пугачёва</h3>
        </div>
    );
}
export default ProfileInfo