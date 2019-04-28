import React, { Component } from 'react';
import ApartmentsContainer from '../../containers/ApartmentsContainer'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class Building extends Component {


  render() {
    const { building } = this.props;

    return (

      <div className = "menu">
        <li>
          <div>Name:{building.name}</div>
          <div>address:{building.address}</div>
          <div>description:{building.description}</div>
          <div>Units:{building.units}</div>
          <button onClick={() => this.props.deleteBuilding(building.id)}> Delete </button>
          <Router>
            <div>
              <Link to={`/buildings/${building.id}`}>{building.name} Apartments</Link>
              <Route path="/buildings/:buildingId" render={(building) => <ApartmentsContainer building={building}/>} />
            </div>
          </Router>
        </li>
      </div>
    );
  }
};

export default Building;
