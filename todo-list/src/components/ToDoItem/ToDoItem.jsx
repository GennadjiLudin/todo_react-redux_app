import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

import './ToDoItem.scss';

const ToDoItem = ({text, isCompleted, removeTask, id, completeTask, changeTask}) => {

    const [edit, setEdit] = useState(false);

    const setInputTask = (e) => {
        changeTask(id, e.target.value);
    }

    const onBlurHandle = () => {
        setEdit(!edit);
    }

    return (
        <li className="todo-item">
            <FontAwesomeIcon 
                onClick={() => completeTask(id)}
                icon={isCompleted ? faCheckCircle : faCircle}
                className={isCompleted ? "mark-complete" : "mark"}
            />
            {edit ? 
                <input
                    onBlur={() => onBlurHandle()}
                    value={text}
                    onChange={setInputTask}
                    className="todo-input"  
                />
                :   
                <span 
                    onDoubleClick={ () => setEdit(!edit) }
                    className={isCompleted ? "completed text" : "text"}>
                        {text}
                </span>
            }
         
            <FontAwesomeIcon
                onClick={() => removeTask(id)}
                icon={faTimes}
                className="delete"
            />
        </li>
    );
}

ToDoItem.defaultProps = {
    text: '',
    isCompleted: false,
    removeTask: () => {},
    completeTask: () => {},
    id: '',
}
  
export default ToDoItem;