import React from 'react'
import { useState } from 'react';

const LoginForm = (props) => {
    const {onLogin} = props;
    const [username, setUsername] = useState();
  return (
    <form onSubmit={e=>{e.preventDefault();onLogin(username);}}>
        <input type={"text"} onChange={e=>setUsername(e.target.value)}/>
        <button>Login</button>
    </form>
  )
}

export default LoginForm