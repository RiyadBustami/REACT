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
    const checkTask=(id,value)=>{
        const newTasks = tasks;
        const index = newTasks.findIndex(Object=>Object.id === id);
        newTasks[index].isDone = value;
        setTasks(newTasks);
        console.log(tasks[index].isDone);
    }
    return (
        <div>
            <TaskForm onSubmit={addTask} />
            <Tasks tasks={tasks} onCheck={checkTask}/>
        </div>
    )
}

export default TaskView