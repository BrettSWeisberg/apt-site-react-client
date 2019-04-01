import React, { Component } from 'react';


class HomeApartment extends Component {



  render() {
    const { apartment } = this.props;

    return (

      <div>
          <div>Name:{apartment.name}</div>
          <div>Square Feet:{apartment.sf}</div>
          <div>Baths:{apartment.baths}</div>
        <br/>
      </div>
    );
  }
};

export default HomeApartment;
