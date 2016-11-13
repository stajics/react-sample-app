import React, { Component } from 'react';
import './App.css';
import sampleAppIcon from '../../assets/sampleAppIcon.png'

class App extends Component { // eslint-disable-line
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={sampleAppIcon} className="App-logo" alt="logo" />
          <h2>React Sample App</h2>
        </div>
        { this.props.children }
      </div>
    );
  }
}

export default App;
