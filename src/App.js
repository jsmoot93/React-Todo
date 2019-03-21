import React from 'react';
import './App.css'
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

  toggleComplete = (event) => {
    let todoStuff = this.state.todoStuff.slice();
    todoStuff = todoStuff.map(todo => {
      if (todo.id === event) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({todoStuff});
  };

  clearTodo = (event) => {
    event.preventDefault();
    let todoStuff = this.state.todoStuff.filter(todo => !todo.completed);
    this.setState({todoStuff});
  };

  render() {
    return (
      <div className="house-of-the-rising-sun">
        <TodoList
          todoStuff={this.state.todoStuff}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm
          todoChange={this.inputTodo}
          submitTodo={this.submitTodo}
          clearTodo={this.clearTodo}
          input={this.state.todo}
        />
      </div>
    );
  }
}

export default App;