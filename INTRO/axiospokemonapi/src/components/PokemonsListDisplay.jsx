import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const PokemonsListDisplay = () => {
    const [pokemons, setPokemons] = useState([]);
    const [limit, setLimit] = useState(0);
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(response => setPokemons(response.data.results))
    });
    const loadData = () => {
        setLimit(limit + 10);
    }
    const showAll = () => {
        setLimit(807);
    }

    return (
        <div>
            <ol>
                {pokemons.slice(0, limit).map((pokemon, i) => <li key={i}>{pokemon.name}</li>)}
            </ol>
            {
                (limit < 807 ? (<span style={{ display: "inline" }}>
                    <button onClick={showAll}>Show All</button>
                </span>) : (<div></div>))
            }
        </div>
    )
}

export default PokemonsListDisplay