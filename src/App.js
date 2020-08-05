import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {

  state = {
    todos: [],
  }

  // Toggle Complete the Item
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  // Delete an Item
  delTodo = (id) => {
    // ... = Spreat Operator, todo => todo.id !== id / This Means that we are Filtering the Todo with the Given id
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Add Todo Item
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(), 
      title,
      completed: false
    };
    this.setState({todos: [...this.state.todos, newTodo]});
  };

  render() {
    return (
      <div className='App'>
        <div className='main-container'>
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete}
            delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
