import React, { Component } from 'react';

class Apartment extends Component {


  handleOnClick = () => {

    this.props.deleteApartment(this.props.apartment.apartmentID)
  }

  render() {
    debugger
    return (
      <div>
        <li>
          <div>Name: {this.props.apartment.name}</div>
          <div>Square Feet: {this.props.apartment.sf}</div>
          <div>Baths: {this.props.apartment.baths}</div>
          <div>rooms: {this.props.apartment.rooms}</div>
          <div>description: {this.props.apartment.description}</div>
          <div>price: {this.props.apartment.price}</div>
        </li>
        <button onClick={this.handleOnClick}> Delete </button>
      </div>
    );
  }

};

export default Apartment;
