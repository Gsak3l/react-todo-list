import React, { Component } from 'react';
import './App.css';
import { Todos } from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "Commit suicide because this is a year old react build",
        completed: false,
      },
      {
        id: 3,
        title: "Walk down the street",
        completed: false,
      },
    ],
  };

  render() {
    return (
      <div className='App'>
        <Todos todos = {this.state.todos} />
      </div>
    );
  }
}

export default App;
