import React from "react";
import ava from "../../../../img/Star.webp";

function Post(props) {
    return (
        <div className="post">
            <img src={ava} alt="" />
            <span>Алла Пугачёва</span>
            <p>{props.message}</p>
        </div>

    );
}

export default Post;