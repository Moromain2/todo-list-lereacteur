import { useState } from 'react'
import './App.css'

// Components import
import Header from './components/Header';
import NewTaskInput from './components/NewTaskInput';
import TasksList from './components/TasksList';
import Footer from './components/Footer';

function App() {
  // Setting the state of the tasks list to an empty array
  const [tasksList, setTasksList] = useState([]);

  // Setting the state of the task to an objet
  const [task, setTask] = useState({
    taskName: "",
    taskDone: false
  })

  const handleNewTask = (e) => {
    // New task variable is assigned the value of the input where the function is called
    let newTask = e.target.value;
    // Clone of the task object
    const taskClone = { ...task };
    // Assignement of the input value to the taskName attribute of the object
    taskClone.taskName = newTask;
    setTask(taskClone);
  }

  const handleTaskUpdate = (target, action) => {
    // Clone of the targeted task passed as an argument
    let taskToUpdate = { ...target };
    // Clone of the tasks list
    let tasksListClone = [...tasksList];
    // Index of the task to update based on its name
    let taskToUpdateIndex = tasksListClone.findIndex(element => element.taskName === taskToUpdate.taskName);
    // Check on the `action` argument : task-done or task-delete
    if (action === "task-done") {
      // Assignement of taskDone to true in the cloned object
      taskToUpdate.taskDone = !taskToUpdate.taskDone;
      // Update of the task in the tasks list
      tasksListClone.splice(taskToUpdateIndex, 1, taskToUpdate);
    } else if (action === "task-delete") {
      // Deletion of the task in the task list
      tasksListClone.splice(taskToUpdateIndex, 1)
    }
    // Update of the tasks list state
    setTasksList(tasksListClone);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Clone of the tasks list
    const tasksListClone = [...tasksList];
    // Addition of the task submited to the clone
    tasksListClone.push(task);
    // Setting the new state of the global task list to the clone
    setTasksList(tasksListClone);
  }

  return (
    <>
      <Header />
      <TasksList tasks_array={tasksList} action={handleTaskUpdate} />
      <NewTaskInput task_to_add={handleNewTask} action={handleSubmit} />
      <Footer />
    </>
  )
}

export default App
