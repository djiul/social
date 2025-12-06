import React from "react";
import ava from "../../../img/Star.webp";
import Post from "./Post/Post";


function Posts(props) {
    return (
        <div className="posts">
            <input type="text" placeholder="Enter the post" />
            <button>Post</button>
            {props.messages.map(e => <Post message={e.message} id={e.id} />)}
        </div>
    );
}

export default Posts;