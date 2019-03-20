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
    </form>
  );
};

export default TodoForm;