import React, { Component } from 'react';
import Building from './Building'

class Buildings extends Component {

  renderBuildings = () => { 
    return  this.props.buildings.map(building =>
     <Building key={building.id} delete={this.props.delete} building={building} />)
  }

  render() {
    return(
      <ul>
        {this.renderBuildings()}
      </ul>
    );
  }
};

export default Buildings;