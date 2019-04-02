import React, { Component } from 'react';

class Apartment extends Component {


  render() {
    const { apartment } = this.props;

    return (

      <div>
        <li>
          <div>Name: {apartment.name}</div>
          <div>Square Feet: {apartment.sf}</div>
          <div>Baths: {apartment.baths}</div>
          <div>rooms: {apartment.rooms}</div>
          <div>description: {apartment.description}</div>
          <div>price: {apartment.price}</div>
        <button onClick={() => this.props.deleteApartment(apartment.id)}> Delete </button>
        </li>
      </div>
    );
  }

};

export default Apartment;
