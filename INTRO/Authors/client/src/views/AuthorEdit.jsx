import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import AuthorForm from '../components/AuthorForm'

const AuthorEdit = (props) => {
    const { id } = useParams();
    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then((res) => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [id])
    const updateAuthor = (author) => {
        axios.put('http://localhost:8000/api/authors/'+id, author)
            .then(()=>{
                navigate("/");
            })
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
            <h2>Update author:</h2>
            <Link to={"/"}>Home</Link>
            {loaded && <AuthorForm initialAuthor={author} onSubmitProp={updateAuthor} errors={errors} />}
        </div>
    )
}

export default AuthorEdit