import React, { Component } from 'react';
import BuildingsContainer from './containers/BuildingsContainer';
import HomePageContainer from './containers/HomePageContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path='/' component={HomePageContainer} />
          <Route path='/building/new' component={BuildingsContainer} />
        </Router>
      </div>
    );
  }
};

export default App
