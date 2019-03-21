import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return (
    <form>
      <input
        className="typer"
        onChange={props.todoChange}
        type="text"
        name="todo"
        value={props.input}
        placeholder="...todo"
      />
      <div className="clikr-hldr">
        <button className="clicker add" onClick={props.submitTodo}>Add</button>
        <button className="clicker delete" onClick={props.clearTodo}>Clear Completed</button>
      </div>
    </form>
  );
};

export default TodoForm;