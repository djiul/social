import React from "react";
import ava from "../../../img/Star.webp";
import Post from "./Post/Post";


function Posts() {
    return (
        <div className="posts">
            <input type="text" placeholder="Enter the post" />
            <button>Post</button>
            <Post message="Hi" />
            <Post message="How are you ?" />
            <Post message="Nice to meet you!" />
            <Post message="I am hungry." />

        </div>
    );
}

export default Posts;