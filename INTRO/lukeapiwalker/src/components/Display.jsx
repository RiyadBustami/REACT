import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
const Display = () => {
    const [item, setItem] = useState({});
    const { category, id } = useParams();
    useEffect(() => {
        axios.get("https://swapi.dev/api/" + category + "/" + id).then((response) => setItem(response.data)).then(console.log(item));
    },[category,id]);
    return (
        category==="people"?<div>
            <h1>{item.name}</h1>
            <p><strong>Height: </strong>{item.height} cm</p>
            <p><strong>Mass: </strong>{item.mass} kg</p>
            <p><strong>Hair Color: </strong>{item.hair_color}</p>
            <p><strong>Skin Color: </strong>{item.skin_color}</p>
        </div>
        :<div>
            <h1>{item.name}</h1>
            <p><strong>Climate: </strong>{item.climate}</p>
            <p><strong>Terrain: </strong>{item.terrain}</p>
            <p><strong>Surface Water: </strong>{item.surface_water}</p>
            <p><strong>Population: </strong>{item.population}</p>
        </div>
    )
}

export default Display