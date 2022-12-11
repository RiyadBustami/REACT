import React from 'react'

const Display = (props) => {
    return (
        <div style={{textAlign:"center"}}>
            <h2 style={{border:"3px solid", maxWidth:"50%", margin:"1% auto"}}>{props.toShow[1]}</h2>
        </div>
    )
}

export default Display