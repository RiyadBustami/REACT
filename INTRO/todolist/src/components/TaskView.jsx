import React, { useState } from 'react'
import Tasks from './Tasks';
import TaskForm from './TaskForm'

const TaskView = () => {
    const [tasks, setTasks] = useState([]);
    const addTask = (task) => {
        task.id=tasks.length;
        setTasks([task,...tasks]);
    }
    const checkTask=(i)=>{
        const newTasks=tasks;
        newTasks[i].isDone = !newTasks[i].isDone;
        setTasks(newTasks);
    }
    const deleteTask=(idx)=>{
        setTasks(tasks.filter((item,i)=>i!==idx));
    }
    return (
        <div>
            <TaskForm onSubmit={addTask} />
            <Tasks tasks={tasks} onCheck={checkTask} deleteTask={deleteTask}/>
        </div>
    )
}

export default TaskView