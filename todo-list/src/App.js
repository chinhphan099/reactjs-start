import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      {title: 'Học bài', isComplete: true},
      {title: 'Đi ngủ'}
    ];
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        {
          this.todoItems.map((item, index) => 
            <TodoItem key={index} item={item} />
          )
        }
      </div>
    );
  }
}

export default App;
