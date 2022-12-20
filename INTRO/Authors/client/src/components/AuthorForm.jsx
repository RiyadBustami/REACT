import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthorForm = (props) => {
    const { initialAuthor, onSubmitProp, errors } = props;
    const [name, setName] = useState(initialAuthor.name);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({ name })

    }

    return (
        <form onSubmit={handleSubmit}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <div>
                <label>Name: </label>
                <input type='text' onChange={e => setName(e.target.value)} value={name} />
            </div>
            <button>Submit</button>
            <button onClick={e => { e.preventDefault(); navigate(-1); }}>Cancel</button>
        </form>
    )
}

export default AuthorForm