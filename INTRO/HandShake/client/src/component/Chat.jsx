import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import io from 'socket.io-client'
import LoginForm from './LoginForm'
import MessageForm from './MessageForm'
import Messages from './Messages'

const Chat = () => {
    const [username, setUsername] = useState();
    const [socket] = useState(() => io(':8000'));
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        socket.on("connection", (data) => console.log(data));
        socket.on("chat", data => {setMessages(data);console.log(messages);});
    })
    const sendMessage = (txt) => {
        socket.emit("chat", {username,txt});
    }
    const onLogin = (username) => {
        setUsername(username);
    }
    return (
        <div>
            {
                !username ?
                    <LoginForm onLogin={onLogin} /> :
                    <div>
                        <Messages messages={messages} />
                        <MessageForm sendMessage={sendMessage} />
                    </div>
            }
        </div>
    )
}

export default Chat