import React from 'react';
const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.todoChange}
        type="text"
        name="todo"
        value={props.input}
        placeholder="...todo"
      />
      <button onClick={props.submitTodo}>Add</button>
      <button onClick={props.clearTodo}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;