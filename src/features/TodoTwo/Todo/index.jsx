import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import './style.scss'

RenderTodo.propTypes = {
    todoList : PropTypes.array,
    onclick: PropTypes.func,
};

RenderTodo.defaultProps = {
    todoList: [],
    onclick: null,
};

function RenderTodo({todoList, onclick}) {

    const renderClick = (todo, index) => {
        if(!onclick) return;
        onclick(todo, index);
    }

    return (
        <ul className='todo-list'>
            {todoList.map((todo, index) => (
                <li key={todo.id} className = {classnames({
                    'todo-item' : true,
                    completed : todo.status === 'completed'
                })}

                    onClick = {() => renderClick(todo, index)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default RenderTodo;