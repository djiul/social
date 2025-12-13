import React from "react";
import "./Messages.css";
import Message from "./Message/Message";


function Messages(props) {
    return (
        <div className="messages">
            {props.messagePage.messageData.map(e => <Message name={e.name} message={e.message} id={e.id} />)}

            <form className="form">
                <input type="text" placeholder="Введите сообщение" />
                <button>Send</button>
            </form>

        </div>
    );
}

export default Messages;