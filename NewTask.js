import {React, useState} from "react";
import './NewTask.css'

const NewTask = ( {onAdd} ) => {

    const [text, setText] = useState('');
    const [deadline, setDeadline] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd({ text, deadline});
        setText('');
        setDeadline('');
    }

    return (
        <div className="add-task">
            <form className="form-add-task">
                <label>Task:
                        <input
                            type="text"
                            className="task"
                            value={text}
                            onChange={(e) => setText(e.target.value)}/>
                </label><br/>
                <label>Deadline:
                    <input
                        type="date"
                        className="deadline"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                    />
                </label>
            </form>
            <button
                type="submit"
                className="add-btn"
                onClick={onSubmit}>Add</button>
        </div>
    )
}

export default NewTask;