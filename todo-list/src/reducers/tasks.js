import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, CHANGE_TASK, DRAG_HAPPENED } from '../constants';
import { load } from 'redux-localstorage-simple';

let TASKS = load({namespace: 'todo-list'});

if(!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
    TASKS = {
        tasks: [],
    }
}

// const TASKS = [
//     {
//         id: 1,
//         text: 'Learn ReactJS',
//         isCompleted: true,
//     },
//     {
//         id: 2,
//         text: 'Learn Router',
//         isCompleted: false,
//     },
//     {
//         id: 3,
//         text: 'Learn Redux',
//         isCompleted: false,
//     },
// ];

const tasks = (state = TASKS.tasks, {id, text, isCompleted, type, droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd, draggableId}) => {
    switch(type) {
        case ADD_TASK:
            return [
                ...state, {
                    id,
                    text,
                    isCompleted,
                }
            ];
        case REMOVE_TASK:
            return [...state].filter(task => task.id !== id);
        case COMPLETE_TASK:
            return [...state].map(task => {
                let newTask = {...task};
                if(newTask.id === id) {
                    newTask.isCompleted = !newTask.isCompleted;
                }
                return newTask;
            });
        case CHANGE_TASK:
            return [...state].map(task => {
                let newTask = {...task};
                if(newTask.id === id) {
                    newTask.text = text;
                }
                return newTask;
            });

        case DRAG_HAPPENED:
            let newState = [...state];
            if(droppableIdStart === droppableIdEnd) {
                const list = newState.map(task => droppableIdStart === task.id);
                const taskReplaced = list.tasks.splice(droppableIndexStart, 1);
                list.tasks.splice(droppableIndexEnd, 0, ...taskReplaced);
            }
            return newState;

        default:
            return state;
    }
}


export default tasks;