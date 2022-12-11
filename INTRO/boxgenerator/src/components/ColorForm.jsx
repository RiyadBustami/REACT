import React, { useState } from 'react'

const ColorForm = (props) => {
    const [color, setColor] = useState("");
    const addColor = (e) =>{
        e.preventDefault();
        props.submitColor(color);
    }
    return (
        <div>
            <form onSubmit={addColor}>
                <p>
                    <label htmlFor="color">Color: </label>
                    <input type="text" onChange={e => setColor(e.target.value)} />
                    <button>Add</button>
                </p>
            </form>
        </div>
    )
}

export default ColorForm