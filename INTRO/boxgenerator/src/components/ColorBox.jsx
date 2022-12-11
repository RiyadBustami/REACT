import React from 'react'

const ColorBox = (props) => {
    const boxes = props.boxes;
    return (
        <div style={{
            display:"flex",
            maxWidth:"100%"
        }}>
            {boxes.map((item, i) => <div key={i} style={{
                backgroundColor: item  ,
                height:"100px",
                width:"100px",
                margin:"1px"
            }} ></div>)}
        </div>
    )
}

export default ColorBox