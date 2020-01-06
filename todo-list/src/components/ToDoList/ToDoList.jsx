import React from 'react';

import ToDoItem from '../ToDoItem/ToDoItem';

import './ToDoList.scss';

const ToDoList = ({tasksList, removeTask, completeTask, changeTask}) => {
    return (
        <ul className="todo-list">
            {tasksList.map(({id, text, isCompleted}) => (
                <ToDoItem
                    completeTask={completeTask}
                    removeTask={removeTask}
                    id={id}
                    key={id}
                    text={text}
                    isCompleted={isCompleted}
                    changeTask={changeTask}
                />
            ))}
        </ul>
    );
}

ToDoList.defaultProps = {
    tasksList: [],
    removeTask: () => {},
    completeTask: () => {},
}

export default ToDoList;