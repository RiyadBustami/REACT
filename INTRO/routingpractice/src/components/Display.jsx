import React from 'react'
import { useParams } from 'react-router-dom'

const Display = () => {
    const {input, color, bgcolor} = useParams();
    return (
        <h1 style={{color:color,backgroundColor:bgcolor}}>{isNaN(input)?"The word is "+input:"The number is "+input}</h1>
    )
}

export default Display