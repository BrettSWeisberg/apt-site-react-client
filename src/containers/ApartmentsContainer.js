import React, { Component } from 'react';
import ApartmentInput from '../components/apartments/ApartmentInput'
import Apartments from '../components/apartments/Apartments'
import { connect } from 'react-redux'

class ApartmentsContainer extends Component {
  render() {
    
    return (
      <div>
        <ApartmentInput
          addApartment={this.props.addApartment}
          buildingId={this.props.building.id}
        />
        <Apartments
          apartments={this.props.apartments}
          buildingId={this.props.building.id}
          deleteReview={this.props.deleteReview}
        />
      </div>
    );
  }
}

const mapStateToProps = ({apartments}) => {
  return {apartments}
}

const mapDispatchToProps = dispatch => ({
  addApartment: apartment => dispatch({type: 'ADD_APARTMENT', payload: apartment}),
  deleteReview: reviewId => dispatch({type: 'DELETE_REVIEW', reviewId})
})

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentsContainer)
