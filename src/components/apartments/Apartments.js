
import React, { Component } from 'react';
import Apartment from './Apartment';

class Apartments extends Component {

  render() {
    const { apartments, buildingId, deleteApartment } = this.props;

    const associatedApartments = apartments.filter(apartment => apartment.building_id === buildingId);
    
    const apartmentList = associatedApartments.map((apartment, index) => {
      return <Apartment key={index} apartment={apartment} deleteApartment={deleteApartment} />
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
