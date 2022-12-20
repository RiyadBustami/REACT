import React from 'react'
import AuthorForm from '../components/AuthorForm'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const AuthorCreate = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const createAuthor = (author) => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res =>navigate("/"))
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
        
    }
    return (
        <div>
            <h2>Add a new author:</h2>
            <Link to={"/"}>Home</Link>
            <AuthorForm initialAuthor={{}} onSubmitProp={createAuthor} errors={errors}/>
        </div>
    )
}

export default AuthorCreate