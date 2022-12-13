import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
const Display = () => {
    const [item,setItem] = useState();
    const{category, id} = useParams();
    useEffect(() => { 
        axios.get("https://swapi.dev/api/"+category+"/"+id).then((response)=>setItem(response.data)).then(console.log(item));
    });
    return (
        <div></div>
    )
}

export default Display