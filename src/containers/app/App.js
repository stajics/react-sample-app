import React, { Component } from 'react';
import './App.css';

class App extends Component { // eslint-disable-line
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="http://image.flaticon.com/teams/new/1-freepik.jpg" className="App-logo" alt="logo" />
          <h2>React Sample App</h2>
        </div>
        { this.props.children }
      </div>
    );
  }
}

export default App;
