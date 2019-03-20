import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoStuff: [],
      todo: ''
    };
  }

  submitTodo = (event) => {
    event.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState({ 
      todoStuff: [...this.state.todoStuff, newTodo], 
      todo: '' 
    });
  };

  inputTodo = (event) => {
    this.setState({[event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <TodoList
          todoStuff={this.state.todoStuff}
        />
        <TodoForm
          todoChange={this.inputTodo}
          submitTodo={this.submitTodo}
          input={this.state.todo}
        />
      </div>
    );
  }
}

export default App;