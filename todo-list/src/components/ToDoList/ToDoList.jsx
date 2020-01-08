import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Droppable } from "react-beautiful-dnd";

import ToDoItem from '../ToDoItem/ToDoItem';

import './ToDoList.scss';



const ToDoList = ({tasksList, removeTask, completeTask, changeTask}) => {
    return (
        <Droppable droppableId={"listId"}>
            {provided => (
                <ul {...provided.droppableProps} ref={provided.innerRef} className="todo-list">
                    <TransitionGroup>
                        {tasksList.map(({id, text, isCompleted}, index) => (
                            <CSSTransition
                                key={id}
                                timeout={500}
                                classNames="item"
                            >
                                <ToDoItem
                                    completeTask={completeTask}
                                    removeTask={removeTask}
                                    id={id}
                                    key={id}
                                    text={text}
                                    index={index}
                                    isCompleted={isCompleted}
                                    changeTask={changeTask}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                    {provided.placeholder}
                </ul>
            )}
        </Droppable>
    );
}

ToDoList.defaultProps = {
    tasksList: [],
    removeTask: () => {},
    completeTask: () => {},
}

export default ToDoList;