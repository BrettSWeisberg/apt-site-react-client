import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Building extends Component {


  render() {
    const { building } = this.props;

    return (

      <div>
        <li>
          {building.name}
          <button onClick={() => this.props.delete(building.id)}> X </button>
          <ReviewsContainer building={building}/>
        </li>
      </div>
    );
  }
};

export default Building;
