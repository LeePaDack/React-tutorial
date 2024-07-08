import React, { useState } from "react";
import './TodoList.css';
const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        setTodos([...todos, {text : input, completed: false}]);
        setInput('');
    }

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    return(
        <div className="TodoList">
            <h1>To Do List</h1>
            <div>
                <input className="todo-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="해야할 일을 추가하세요"
                />
                <button className="todo-button" onClick={addTodo}>할 일 추가하기</button>
            </div>

            <ul className="todo-ul">
                {todos.map((todo,index) => (
                    <li className="todo-li"
                    key={index}
                    style={{
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        cursor: 'pointer'
                    }}
                    onClick={() => toggleTodo(index)}>
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    )


}

export default TodoList;