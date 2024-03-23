import "./tasks-list.css";
import binIcon from "../../assets/bin-icon.svg";

const TasksList = ({ tasks_array, action }) => {
    return (
        <ul className="tasks-list container">
            {tasks_array.map((current_task) => {
                return (
                    <li>
                        <div className="input-group">
                            <input
                                onClick={() => { action(current_task, "task-done") }}
                                type="checkbox"
                                name={current_task.taskName} />
                            <label
                                htmlFor={current_task.taskName}
                                className={current_task.taskDone ? `task-done` : ``}>
                                {current_task.taskName}
                            </label>
                        </div>
                        <button className="delete-button"
                            onClick={() => { action(current_task, "task-delete") }}>
                            <img src={binIcon} alt="bin icon" />
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default TasksList;