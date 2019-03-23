import React, { Component } from 'react';

class Review extends Component {


  handleOnClick = () => {
    this.props.deleteReview(this.props.review.reviewId)
  }

  render() {
    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={this.handleOnClick}> x </button>
      </div>
    );
  }

};

export default Review;
