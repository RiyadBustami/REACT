import React from 'react'
import { useState } from 'react';
import { Alert, Button, Container, Stack, TextField , Typography } from '@mui/material'

const LoginForm = (props) => {
  const { onLogin } = props;
  const [username, setUsername] = useState();
  return (
    <Container>
      <Typography variant='h1' >Welcome to myChat</Typography>
      <Typography variant='caption'>You can login with your username here:</Typography>
    <form onSubmit={e => { e.preventDefault(); onLogin(username); }}>
      <Stack spacing={2} direction={"row"} justifyContent={'center'}>
        <TextField onChange={e => setUsername(e.target.value)} id="outlined-basic" label="Username" variant="outlined" />
        <Button type='submit' size='lg' variant='contained'>Login</Button>
      </Stack>
    </form>
    </Container>
  )
}

export default LoginForm