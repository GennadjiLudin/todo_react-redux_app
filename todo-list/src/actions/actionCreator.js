import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, CHANGE_FILTERS, CHANGE_TASK, DRAG_HAPPENED } from '../constants';

export const addTask = (id, text, isCompleted) => ({
    type: ADD_TASK,
    id,
    text,
    isCompleted,
});

export const removeTask = id => ({
    type: REMOVE_TASK,
    id,
})

export const completeTask = id => ({
    type: COMPLETE_TASK,
    id,
})

export const changeFilter = activeFilter => ({
    type: CHANGE_FILTERS,
    activeFilter,
})

export const changeTask = (id, text) => ({
    type: CHANGE_TASK,
    id,
    text,
})

export const sortTasks = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId
) => ({
        type: DRAG_HAPPENED,
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId
    })