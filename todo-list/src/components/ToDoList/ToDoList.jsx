import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Droppable } from "react-beautiful-dnd";

import ToDoItem from '../ToDoItem/ToDoItem';

import './ToDoList.scss';



const ToDoList = ({tasksList, removeTask, completeTask, changeTask, activeFilter}) => {

    return (
        <Droppable droppableId={String(Date.now())}>
            {provided => (
                <>
                    <ul {...provided.droppableProps} ref={provided.innerRef} className="todo-list">
                        <TransitionGroup>
                            {tasksList.map(({id, text, isCompleted}, index) => (
                                <CSSTransition
                                    key={id}
                                    timeout={{enter: 300, exit: 50}}
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
                    <TransitionGroup>
                        <CSSTransition timeout={300} classNames="item">
                            <span className={tasksList.length === 0 ? "empty" : "empty hide"} > {tasksList.length === 0 && activeFilter === "completed" ? "No completed tasks" : tasksList.length === 0 && "No active tasks"} </span>
                        </CSSTransition>
                    </TransitionGroup>
                </>
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