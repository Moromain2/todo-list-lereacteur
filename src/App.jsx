import { useState } from 'react'
import './App.css'

// Components import
import NewTaskInput from './components/NewTaskInput';
import TasksList from './components/TasksList';

function App() {
  // Setting the state of the tasks list to an empty array
  const [tasksList, setTasksList] = useState([]);

  // Setting the state of the task to an objet
  const [task, setTask] = useState({
    taskName: "",
    taskDone: false,
    taskDeleted: false,
  })

  const handleNewTask = (e) => {
    // New task variable is assigned the value of the input where the function is called
    let newTask = e.target.value;
    // Copy of the task object
    const taskCopy = { ...task };
    // Assignement of the input value to the taskName attribute of the object
    taskCopy.taskName = newTask;
    setTask(taskCopy);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Clone of the tasks list
    const tasksListCopy = [...tasksList];
    // Addition of the task submited to the clone
    tasksListCopy.push(task);
    // Setting the new state of the global task list to the clone
    setTasksList(tasksListCopy);
  }

  return (
    <>
      <NewTaskInput task_to_add={handleNewTask} action={handleSubmit} />
      <TasksList tasks_array={tasksList} />
    </>
  )
}

export default App
