import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete }) => { 
    return ( 
        <div className="task">
            <h3>
                {task.text}{' '}
                <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
                {/* When a user deletes a task the log shows the delete and gives the id of that task */}
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task 