import React from 'react';

import Todo from './Todo';

const TodoList = (props) => {
  return (
    <div>
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