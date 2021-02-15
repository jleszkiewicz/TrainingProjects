import './Tasks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'

const Task = ({ task, onDelete, onComplete }) => {
    return (
        <div className={`task-toggle ${task.completed ? 'completed' : 'elo'}`}>
            <div className="task-to-do">
                <div className="text-to-do">
                    <h3 className="task-text">{task.text}</h3>
                    <p className="task-deadline">{task.deadline}</p>
                </div>
                <div className="icons-to-do">
                    <FontAwesomeIcon
                        id="check"
                        icon={faTrash}
                        onClick={() => onDelete(task.id)}/>
                    <FontAwesomeIcon
                        id="check"
                        icon={faCheck}
                        onClick={() => onComplete(task.id)}/>
                </div>
            </div>
        </div>
    )
}

export default Task;