import React from "react";
import ava from "../../../img/Star.webp";
import Post from "./Post/Post";

let postText = React.createRef()

function Posts(props) {
    let addPost = () => {
        if (postText.current.value) {
            props.addPost(postText.current.value)
            postText.current.value = ""
        }

    }
    return (
        <div className="posts">
            <input ref={postText} type="text" placeholder="Enter the post" />
            <button onClick={addPost}>Post</button>
            {props.postData.map(e => <Post message={e.message} id={e.id} />)}
        </div>
    );
}

export default Posts;