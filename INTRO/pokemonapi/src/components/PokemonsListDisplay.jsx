import React, { useState } from 'react'
import { useEffect } from 'react'

const PokemonsListDisplay = () => {
    const [pokemons, setPokemons] = useState([]);
    const [limit, setLimit] = useState(5);
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(response => response.json())
            .then(response => setPokemons(response.results))
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
                    <button onClick={loadData}>Fetch more Pokemons</button><button onClick={showAll}>Show All</button>
                </span>) : (<div></div>))
            }
        </div>
    )
}

export default PokemonsListDisplay