const TasksList = ({ tasks_array }) => {
    return (
        <ul className="tasks-list">
            {tasks_array.map((task) => {
                console.log("from list >>> ", task);
                return (
                    <li key={task.taskName}>
                        <input
                            type="checkbox"
                            id={task.taskName}
                            name={task.taskName}
                        />
                        <label htmlFor={task.taskName}>{task.taskName}</label>
                    </li>
                )
            })}
        </ul>
    )
}

export default TasksList;