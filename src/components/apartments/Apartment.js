import React, { Component } from 'react';

class Apartment extends Component {


  handleOnClick = () => {
    this.props.deleteReview(this.props.review.reviewId)
  }

  render() {
    debugger
    return (
      <div>
        <li>
          {this.props.apartment.name}
        </li>
        <button onClick={this.handleOnClick}> x </button>
      </div>
    );
  }

};

export default Apartment;
