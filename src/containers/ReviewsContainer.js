import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput
          addReview={this.props.addReview}
          apartmentId={this.props.apartment.id}
        />
        <Reviews
          reviews={this.props.reviews}
          apartmentId={this.props.apartment.id}
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
  addReview: review => dispatch({type: 'ADD_REVIEW', review}),
  deleteReview: reviewId => dispatch({type: 'DELETE_REVIEW', reviewId})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
