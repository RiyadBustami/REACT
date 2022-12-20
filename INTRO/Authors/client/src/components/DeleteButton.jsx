import axios from 'axios';
import React from 'react'

const DeleteButton = (props) => {
    const {id, successCallback} = props;
    const deleteAuthor = (id) => {
        axios.delete("http://localhost:8000/api/authors/"+id)
            .then(()=>successCallback(id))
            .catch((err)=>console.log(err))
    }
    return (
        <button onClick={()=>deleteAuthor(id)}>
            Delete
        </button>
    )
}

export default DeleteButton