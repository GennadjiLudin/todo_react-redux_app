import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

import './ToDoItem.scss';

const ToDoItem = ({text, isCompleted, removeTask, id, completeTask, changeTask, index}) => {

    const [edit, setEdit] = useState(false);

    const setInputTask = (e) => {
        changeTask(id, e.target.value);
    }

    const onBlurHandle = () => {
        setEdit(!edit);
    }

    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className="todo-item">
                    <FontAwesomeIcon 
                        onClick={() => completeTask(id)}
                        icon={isCompleted ? faCheck : faCircle}
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
                            onClick={ () => setEdit(!edit) }
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
            )}
        </Draggable>
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