
import React, { Component } from 'react';
import Apartment from './Apartment';

class Apartments extends Component {

  render() {
    const { apartments, buildingId, deleteReview } = this.props;
    
    const associatedApartments = apartments.filter(apartment => apartment.buildingID === buildingId);

    const apartmentList = associatedApartments.map((apartment, index) => {
      return <Apartment key={index} apartment={apartment} deleteReview={deleteReview} />
    })

    return (
      <div>
        <ul>
          {apartmentList}
        </ul>
      </div>
    );

  }

};

export default Apartments;
