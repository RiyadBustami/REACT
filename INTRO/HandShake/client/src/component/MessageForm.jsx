import React, { useState } from 'react'

const MessageForm = (props) => {
    const { sendMessage } = props;
    const [txt, setTxt] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(txt);
        setTxt("");

    }
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" onChange={e => setTxt(e.target.value)} value={txt} />
                <button>Send</button>
            </form>
        </div>  
    )
}

export default MessageForm