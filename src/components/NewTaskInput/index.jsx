import "./new-task-input.css"

// Icons imports
import NoteIcon from "../../assets/icons/NoteIcon";
import AlertIcon from "../../assets/icons/AlertIcon";
import PlusIcon from "../../assets/icons/PlusIcon";

// Components imports
import Button from "../Button";

const NewTaskInput = ({ task_to_add, action }) => {
    // let tasksExists = action();
    return (
        <form onSubmit={action}>
            <div className="container">
                <div className="input-group">
                    <div className="input-label-container">
                        <NoteIcon />
                        <label className="input-label" htmlFor="new-task">Add a new task</label>
                    </div>
                    <input
                        type="text"
                        name="new-task"
                        placeholder="New task"
                        className="input-field"
                        onChange={task_to_add} />
                    {/* Onlu show the alert when the task already exists */}
                    {/* <div className="input-label-container alert">
                        <AlertIcon />
                        <p className="input-label">This task already exists</p>
                    </div> */}
                </div>
                <Button type="submit" value="Add task" icon={<PlusIcon />} />
            </div>
        </form>
    )
}

export default NewTaskInput;