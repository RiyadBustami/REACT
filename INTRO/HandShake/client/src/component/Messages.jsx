import React from 'react'
import { Card, Container, Typography } from '@mui/material'

const Messages = (props) => {
    const { messages, username } = props;
    return (    
        <Container>
            <div>
                <Typography variant='h4'>Chat</Typography>
                <Typography variant='h6' color={'red'}>Welcome {username}</Typography>
                <Container style={{height:'300px', overflowY:'scroll', scrollBehavior:'smooth'}}>
                {
                    messages.map((message, i) => <Card key={i} style={{ marginRight: username === message.username ? '0%' : '80%', marginLeft: username === message.username ? '80%' : '0%' , marginBottom:'5px'}}>{username === message.username ? 'You' : message.username}: {message.txt}</Card>)
                }
                </Container>
            </div>
        </Container>
    )
}

export default Messages