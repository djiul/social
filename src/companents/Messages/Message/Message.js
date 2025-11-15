import React from "react";
import "./Message.css";

function Message(props){
    return(
        <div className="message">
            <p className="name">{props.name}</p>
            <p className="message_text">{props.message}</p>
        </div>
    );
}

export default Message;