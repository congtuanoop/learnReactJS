import React, { useState } from 'react';
import RenderTodo from './Todo';

TodoList.propTypes = {
    
};

function TodoList(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'completed'
        },
        {
            id: 2,
            title: 'Code',
            status: 'waiting'
        },
        {
            id: 3,
            title: 'Sleep',
            status: 'completed'
        }
    ];

    const [todoList, setTodoList] = useState(initTodoList);

    const handleClick = (todo, index) => {
        const newTodoList = [...todoList];

        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'completed' ? 'waiting' : 'completed'
        };

        setTodoList(newTodoList);
    }

    return (
        <div>
            <h3>Todo list</h3>
            <RenderTodo 
                todoList = {initTodoList}
                onclick = {handleClick}
            />
        </div>
    );
}

export default TodoList;