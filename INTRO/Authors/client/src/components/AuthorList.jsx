import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then((res) => {
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [authors])
    const deleteFromDom = (id) =>{
        setAuthors(authors.filter(author => author._id!==id))
    }
    return (
        <table style={{margin:"0 auto"}}>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                </tr>
            </thead>
            <tbody>
                {loaded && authors.map((author, i) => <tr key={i}>
                    <td>{author.name}</td>
                    <td>
                        <Link to={"/edit/" + author._id}><button>Edit</button></Link>
                        <DeleteButton id={author._id} successCallback={deleteFromDom} />
                    </td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default AuthorList