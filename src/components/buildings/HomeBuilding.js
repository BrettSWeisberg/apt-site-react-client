import React, { Component } from 'react';
//import ApartmentsContainer from '../../containers/ApartmentsContainer'

class HomeBuilding extends Component {

  renderBuildings = () => {
    return  this.props.buildings.map(building =>
     <Building key={building.id} building={building} />)
  }

  render() {
    const { building } = this.props;

    return (

      <div>
        <li>
          <div>Name:{building.name}</div>
          <div>address:{building.address}</div>
          <div>description:{building.description}</div>
          <div>Units:{building.units}</div>
        //  <button onClick={() => this.props.delete(building.id)}> Show Apartments </button>
      //    <ApartmentsContainer building={building}/>
        </li>
      </div>
    );
  }
};

export default HomeBuilding;
