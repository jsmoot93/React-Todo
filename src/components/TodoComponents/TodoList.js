import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = (props) => {
  return (
    <div className="list">
      {props.todoStuff.map(todoItem => (
        <Todo
          todo={todoItem}
          toggleComplete={props.toggleComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;