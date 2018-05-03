import React, { Component } from 'react';
import './App.css';
import IssuesList from './components/IssuesList';
import IssueDetails from './components/IssueDetails';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Root extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React issues list : </h1>
        </header>
        <Switch>
          <Route exact path="/" component={IssuesList} />
          <Route path="/issue/:id" component={IssueDetails} />
        </Switch>
      </div>
    );
  }
}

const App = () => (
  <Router>
    <Route component={Root} />
  </Router>
);


export default App;

