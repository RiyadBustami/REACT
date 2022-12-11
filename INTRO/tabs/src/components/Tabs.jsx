import React from 'react'

const Tabs = (props) => {
    const tabClicked = (e)=>{
        props.showTab(e);
    }
    return (
        <div style={{marginTop:"20px"}}>
            {props.arr.map((item,i)=> <h1 style={{display:"inline",textAlign:"center", margin:"10px",cursor: "default", border:"5px solid"}} key={i} onClick={(e)=>tabClicked(i)}>{item[0]}</h1>)}
        </div>
    )
}

export default Tabs