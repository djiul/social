import React from "react";
import "./Messages.css";
import Message from "./Message/Message";
let messages =[
    {name:"Вася", message:"Я Вася!", id: 1},
    {name:"Галкин", message:"Алла это я, твой муж!", id: 2},
    {name:"Алла", message:"Я очень рада тебе!", id: 3},
]

function Messages() {
    return (
        <div className="messages">
            {messages.map(e => <Message name={e.name} message={e.message} id={e.id} />)}
            
            <form className="form">
                <input type="text" placeholder="Введите сообщение" />
                <button>Send</button>
            </form>

        </div>
    );
}

export default Messages;