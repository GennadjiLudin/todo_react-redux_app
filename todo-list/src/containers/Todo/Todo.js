import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import { addTask, removeTask, completeTask, changeFilter, changeTask, sortTasks } from '../../actions/actionCreator';

import ToDoInput from '../../components/ToDoInput/ToDoInput';
import ToDoList from '../../components/ToDoList/ToDoList';
import Footer from '../../components/Footer/Footer';

import './Todo.scss';

class Todo extends Component {

    state = {
        taskText: '',
    }

    handleInputChange = ({target: {value}}) => {
        this.setState({
            taskText: value,
        })
    }

    addTask = ({key}) => {
        const {taskText} = this.state;

        if(taskText.length > 3 && key === 'Enter') {
            const { addTask } = this.props;

            addTask((new Date()).getTime(), taskText, false);

            this.setState({
                taskText: '',
            })
        }
    }

    filterTasks = (tasks, activeFilter) => {
        switch (activeFilter) {
            case 'completed':
                return tasks.filter(task => task.isCompleted);
            case 'active':
                return tasks.filter(task => !task.isCompleted);
            default:
                return tasks;
        }
    }

    getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;

    onDragEnd = ({destination, source, draggableId}) => {

        if(!destination) {
            return;
        }
        
        const { sortTasks } = this.props;

        sortTasks(
            source.index,
            destination.index,
            draggableId
        );
    }

    render() {

        const {taskText} = this.state;
        const {tasks, removeTask, completeTask, changeFilter, filters, changeTask} = this.props;
        const isTasksExist = tasks && tasks.length > 0;
        const filteredTasks = this.filterTasks(tasks, filters);
        const tasksCounter = this.getActiveTasksCounter(tasks);

        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="todo-wrapper">
                    <ToDoInput onKeyPress={this.addTask} onChange={this.handleInputChange} value={taskText} />
                    {isTasksExist && <ToDoList changeTask={changeTask} completeTask={completeTask} tasksList={filteredTasks} removeTask={removeTask} /> }
                    {isTasksExist && <Footer changeFilter={changeFilter} amount={tasksCounter} activeFilter={filters} />}
                </div>
            </DragDropContext>
        );
    }
}

export default connect (({ tasks, filters }) =>({
    tasks,
    filters,
}), { addTask, removeTask, completeTask, changeFilter, changeTask, sortTasks })(Todo);