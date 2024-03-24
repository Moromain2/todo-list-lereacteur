import "./tasks-list.css";

// Icons imports
import CrossIcon from "../../assets/icons/CrossIcon";

// Components imports
import Button from "../Button";

const TasksList = ({ tasks_array, action }) => {
    return (
        <div className="container">
            <ul className="tasks-list">
                {tasks_array.map((current_task) => {
                    return (
                        <li key={current_task.taskName}>
                            <input
                                onClick={() => { action(current_task, "task-done") }}
                                type="checkbox"
                                name={current_task.taskName}
                            />
                            <label
                                htmlFor={current_task.taskName}
                                className={current_task.taskDone ? `task-done` : ``}>
                                {current_task.taskName}
                            </label>
                            <Button
                                value={"Delete"}
                                action={() => { action(current_task, "task-delete") }}
                                additional_class={"danger"}
                                icon={<CrossIcon />}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TasksList;