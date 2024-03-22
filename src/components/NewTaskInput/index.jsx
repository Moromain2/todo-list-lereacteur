import "./new-task-input.css"

const NewTaskInput = ({ task_to_add, action }) => {
    return (
        <form onSubmit={action}>
            <div className="input-group">
                <label htmlFor="new-task">Add a new task</label>
                <input
                    type="text"
                    name="new-task"
                    placeholder="New task"
                    onChange={task_to_add} />
            </div>
            <input type="submit" value="Add Task" />
        </form>
    )
}

export default NewTaskInput;