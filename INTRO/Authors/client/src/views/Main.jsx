import React from 'react'
import { Link } from 'react-router-dom'
import AuthorList from '../components/AuthorList'

const Main = () => {
    return (
        <div>
            <Link to={"/new"}>Add an author</Link>
            <h2>We have quotes by:</h2>
            <AuthorList/>
        </div>
    )
}

export default Main