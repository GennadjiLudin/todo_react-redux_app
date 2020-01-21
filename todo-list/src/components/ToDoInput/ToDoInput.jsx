import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import './ToDoInput.scss';

const ToDoInput = ({value, onChange, onKeyPress, onBlur}) => {
    return (
        <div className="todo-input-wrapper">
            <FontAwesomeIcon icon={faPlus} className="plus" />
            <input
                className="todo-input"
                placeholder={window.screen.width < 600 ? "Add and press Enter" : "Add task and press Enter"}
                onChange={onChange}
                onKeyPress={onKeyPress}
                onBlur={onBlur}
                value={value}
            />
        </div>
    );
}

ToDoInput.defaultProps = {
    onChange: () => {},
    onKeyPress: () => {},
    value: '',
}

export default ToDoInput;
