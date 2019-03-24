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
          reviews={this.props.reviews}
          buildingId={this.props.building.id}
          deleteReview={this.props.deleteReview}
        />
      </div>
    );
  }
}

const mapStateToProps = ({reviews}) => {
  return {reviews}
}

const mapDispatchToProps = dispatch => ({
  addApartment: review => dispatch({type: 'ADD_REVIEW', review}),
  deleteReview: reviewId => dispatch({type: 'DELETE_REVIEW', reviewId})
})

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentsContainer)