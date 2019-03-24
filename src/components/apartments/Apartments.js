
import React, { Component } from 'react';
import Apartment from './Apartment';

class Apartments extends Component {

  render() {

    const { reviews, buildingId, deleteReview } = this.props;

    const associatedReviews = reviews.filter(review => review.buildingId === buildingId);

    const reviewList = associatedReviews.map((review, index) => {
      return <Apartment key={index} review={review} deleteReview={deleteReview} />
    })

    return (
      <div>
        <ul>
          {reviewList}
        </ul>
      </div>
    );
  }

};

export default Apartments;
