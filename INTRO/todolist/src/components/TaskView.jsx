import React, { useState } from 'react'
import Tasks from './Tasks';
import TaskForm from './TaskForm'

const TaskView = () => {
    const [tasks, setTasks] = useState([]);
    const addTask = (task) => {
        task.id=tasks.length;
        setTasks([task,...tasks]);
        console.log(tasks);
    }
    const checkTask=(i)=>{
        tasks[i].isDone = !tasks[i].isDone;
        setTasks(tasks);
        console.log(i);
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