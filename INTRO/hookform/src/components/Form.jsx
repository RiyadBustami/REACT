import React, { useState } from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");

    return (
        <div>
            <form>
                <div>
                    <label htmlFor={"firstName"}>First Name: </label>
                    <input type={"text"} onChange={(e) => setFirstName(e.target.value)} value={firstName}></input>
                </div>
                <div>
                    <label htmlFor={"lastName"}>Last Name: </label>
                    <input type={"text"} onChange={(e) => setLastName(e.target.value)} value={lastName}></input>
                </div>
                <div>
                    <label htmlFor={"email"}>Email: </label>
                    <input type={"email"} onChange={(e) => setEmail(e.target.value)} value={email}></input>
                </div>
                <div>
                    <label htmlFor={"password"}>Password: </label>
                    <input name={'password'} type={"password"} onChange={(e) => setPassword(e.target.value)} value={password}></input>
                </div>
                <div>
                    <label htmlFor={"passwordconf"}>Confirm Password: </label>
                    <input name={'passwordconf'} type={"password"} onChange={(e) => setPasswordConf(e.target.value)} value={passwordConf}></input>
                </div>
            </form>
            <hr></hr>
            <p>First Name: <span>{firstName}</span></p>
            <p>Last Name: <span>{lastName}</span></p>
            <p>Email: <span>{email}</span></p>
            <p>Password: <span>{password}</span></p>
            <p>Confirm Password: <span>{passwordConf}</span></p>
        </div>
    )
}

export default Form