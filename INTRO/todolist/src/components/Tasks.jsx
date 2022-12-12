import React, {useState} from 'react'

const Tasks = (props) => {
    const [x,setX] = useState(0);
    const handleCheck = (i) => {
        props.onCheck(i);
        setX(x+1);
    } 
    const deleteTask = (e,i)=>{
        e.preventDefault();
        props.deleteTask(i);
    }
    const toShowTasks = props.tasks;
    return (
        <div>
            {toShowTasks.map((item, i) => {
                return (
                    <div key={i}>
                        <label
                            style={item.isDone ? { textDecoration: "line-through" } : { color: "red" }}
                            htmlFor={item.id} >{item.text}
                        </label>
                        <input name={item.id} type={"checkbox"} onChange={e => handleCheck(i)} checked={item.isDone}/>
                        <form style={{display:"inline"}} onSubmit={e=>deleteTask(e,i)}>
                            <button>Delete</button>
                        </form>
                    </div>
                )
            })}
        </div>
    )
}

export default Tasks