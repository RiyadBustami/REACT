import { Button, Icon, TextareaAutosize, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react'

const MessageForm = (props) => {
    const { sendMessage } = props;
    const [txt, setTxt] = useState("");
    const handleSubmit = (e) => {
        
        e.preventDefault();
        if (txt.length > 0) {
            sendMessage(txt);
            setTxt("");
        }

    }
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <TextField size='small' fullWidth onChange={e => setTxt(e.target.value)} value={txt} ></TextField>
                <Button type='submit'><SendIcon></SendIcon></Button>
            </form>
        </div>
    )
}

export default MessageForm