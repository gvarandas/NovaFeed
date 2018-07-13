import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { FeedbackProvider } from './context/FeedbackContext';
import Valores from './components/Valores';

class App extends Component {
  render() {
    return (
      <FeedbackProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">NovaFeed</h1>
          </header>
          <Valores />
        </div>
      </FeedbackProvider>
    );
  }
}

export default App;
