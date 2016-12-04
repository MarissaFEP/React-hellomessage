import React, { Component } from 'react';
import './App.css';
import HelloMessageES6 from './HelloMessageES6';
import HelloMessageES5 from './HelloMessageES5';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloMessageES6 userMessage='ALOHA ES6!!!' />
        <HelloMessageES5 userMessage='ALOHA ES5!!!' />
      </div>
    );
  }
}

export default App;
