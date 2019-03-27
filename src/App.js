import React, { Component } from 'react';
import BuildingsContainer from './containers/BuildingsContainer';
import HomePageContainer from './containers/HomePageContainer';
import AboutUs from './components/static/AboutUs';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/building/new'} className="nav-link">Create Building</Link></li>
            <li><Link to={'/aboutus'} className="nav-link">About Us</Link></li>
          </ul>
          </nav>
          <Switch>
          <Route exact path='/' component={HomePageContainer} />
          <Route path='/building/new' component={BuildingsContainer} />
          <Route path='/aboutus' component={AboutUs} />
          </Switch>
        </Router>
      </div>
    );
  }
};

export default App
