import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IssuesList from './components/IssuesList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React issues list : </h1>
        </header>
        <IssuesList />
      </div>
    );
  }
}

export default App;
