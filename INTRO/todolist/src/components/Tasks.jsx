import React from 'react'

const Tasks = (props) => {
    const handleCheck = (id,value)=>{
        props.onCheck(id,value);
    }
    return (
        <div>
            {props.tasks.map((item, i) => {
                return (
                    <div style={item.isDone ? {textDecoration:"line-through"}:{}} key={i}>
                        {item.text}<input type={"checkbox"} onClick={e=>handleCheck(item.id,e.target.checked)} key={i}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Tasks