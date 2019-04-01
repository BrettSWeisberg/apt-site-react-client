
import React, { Component } from 'react';
import BuildingsContainer from './containers/BuildingsContainer';
import HomePageContainer from './containers/HomePageContainer';
import AboutUs from './components/static/AboutUs';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


import 'bulma/css/bulma.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
        <nav>
        <div className="navbar-end">
          <div className="buttons">
            <div className="button is-primary"><Link to={'/'} className="nav-link">Home</Link></div>
            <div className="button is-primary"><Link to={'/building/new'} className="nav-link">Create Building</Link></div>
            <div className="button is-primary"><Link to={'/aboutus'} className="nav-link">About Us</Link></div>
            </div>
          </div>
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
