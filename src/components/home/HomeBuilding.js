import React, { Component } from 'react';


class HomeBuilding extends Component {



  render() {
    const { building } = this.props;

    return (

      <div>

          <div>Name:{building.name}</div>
          <div>address:{building.address}</div>
          <div>description:{building.description}</div>
          <div>Units:{building.units}</div>

        <br/>
      </div>
    );
  }
};

export default HomeBuilding;
