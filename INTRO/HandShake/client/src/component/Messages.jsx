import React from 'react'

const Messages = (props) => {
    const {messages} = props;
    return (
        <div>{
            messages.map((message, i) => <p key={i}>{message['username']}: {message.txt}</p>)
            }</div>
    )
}

export default Messages