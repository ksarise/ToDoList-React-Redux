import React, { Component } from 'react';

import { TodoAdd, TodoList} from './containers';
class App extends Component {
  render() {
    return (
      <div className="App">
          <TodoAdd />
          <TodoList />
      </div>
    );
  }
}

export default App;