import React, { Component } from 'react';
import './App.css';
import EnhouncedCounter from './containers/EnhouncedCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Simple counter</h1>
        </header>
        <EnhouncedCounter />
      </div>
    );
  }
}

export default App;
