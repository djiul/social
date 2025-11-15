import React from "react";
import "./Messages.css";
import Message from "./Message/Message";

function Messages() {
    return (
        <div className="messages">
            <Message name="Вася" message="Я Вася!" />
            <Message name="Галкин" message="Алла это я, твой муж!" />
            <Message name="Алла" message="Я очень рада тебе!" />
            
            <form className="form">
                <input type="text" placeholder="Введите сообщение" />
                <button>Send</button>
            </form>

        </div>
    );
}

export default Messages;