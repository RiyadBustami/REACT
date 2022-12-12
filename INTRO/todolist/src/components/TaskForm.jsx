import React from 'react'
import { useState } from 'react'

const TaskForm = (props) => {
    const [task,setTask] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.onSubmit({
            id:null,
            text:task,
            isDone:false
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='New Task?'
                value={task}
                name='task'
                onChange={e=>setTask(e.target.value)}
            />
            <button>Add a Task</button>
        </form>
    )
}

export default TaskForm