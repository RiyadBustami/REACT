import React, { useState } from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");
    const [city, setCity] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confPasswordError, setConfPasswordError] = useState("");
    // const [cityError, setCityError] =useState("");
    const cities = ["Nablus", "Ramallah", "Qalqilya", "Hebron"]

    const fNameHandle = (e) => {
        if (e.target.value.length < 2 && e.target.value.length != 0) {
            setFirstNameError("First Name must be at least 2 characters");
        }
        else {
            setFirstNameError("");
            setFirstName(e.target.value);
        }
    }
    const lNameHandle = (e) => {
        if (e.target.value.length < 2 && e.target.value.length != 0) {
            setLastNameError("Last Name must be at least 2 characters");
        }
        else {
            setLastNameError("");
            setLastName(e.target.value);
        }
    }
    const emailHandle = (e) => {
        if (e.target.value.length < 2 && e.target.value.length != 0) {
            setEmailError("Email must be at least 2 characters");
        }
        else {
            setEmailError("");
            setEmail(e.target.value);
        }
    }
    const passwordHandle = (e) => {
        if (e.target.value.length < 8 && e.target.value.length != 0) {
            setPasswordError("Password must be at least 8 characters");
        }
        else {
            setPasswordError("");
            setPassword(e.target.value);
        }
    }
    const confirmPasswordHandle = (e) => {
        if (e.target.value != password && e.target.value.length != 0) {
            setConfPasswordError("Confirm Password must match password");
        }
        else {
            setConfPasswordError("");
            setPasswordConf(e.target.value);
        }
    }


    return (
        <div>
            <form>
                <div>
                    <label htmlFor={"firstName"}>First Name: </label>
                    <input type={"text"} onChange={fNameHandle}></input>
                    <div>
                        <p style={{ color: "red" }}>{firstNameError}</p>
                    </div>
                </div>
                <div>
                    <label htmlFor={"lastName"}>Last Name: </label>
                    <input type={"text"} onChange={lNameHandle}></input>
                    <div>
                        <p style={{ color: "red" }}>{lastNameError}</p>
                    </div>
                </div>
                <div>
                    <label htmlFor={"email"}>Email: </label>
                    <input type={"email"} onChange={emailHandle}></input>
                    <div>
                        <p style={{ color: "red" }}>{emailError}</p>
                    </div>
                </div>
                <div>
                    <label htmlFor={"password"}>Password: </label>
                    <input name={'password'} type={"password"} onChange={passwordHandle}></input>
                    <div>
                        <p style={{ color: "red" }}>{passwordError}</p>
                        <p style={{ color: "red" }}>{confPasswordError}</p>
                    </div>
                </div>
                <div>
                    <label htmlFor={"passwordconf"}>Confirm Password: </label>
                    <input name={'passwordconf'} type={"password"} onChange={confirmPasswordHandle}></input>
                </div>
                <div>
                    <label htmlFor={"city"}>City: </label>
                    <select name={'city'} onChange={e => setCity(e.target.value)}>
                        {cities.map((item, i) => <option key={i} value={item}>{item}</option>)}
                    </select>
                </div>
            </form>
            <hr></hr>
            <p>First Name: <span>{firstName}</span></p>
            <p>Last Name: <span>{lastName}</span></p>
            <p>Email: <span>{email}</span></p>
            <p>Password: <span>{password}</span></p>
            <p>Confirm Password: <span>{passwordConf}</span></p>
            <p>City: <span>{city}</span></p>
        </div>
    )
}

export default Form