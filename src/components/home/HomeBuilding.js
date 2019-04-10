import React, { Component } from 'react';

class HomeBuilding extends Component {
  constructor(props) {
    super(props)
      this.state = {
        counter: 0,
      }
      this.onClick = this.onClick.bind(this);

    }

  onClick = event => {
    this.setState({
      counter: this.state.counter + 1,
    });

    //this.state.counter += 1
  }



  render() {
    const { building } = this.props;
    return (
      <div>
          <div>Name:{building.name}</div>
          <div>address:{building.address}</div>
          <div>description:{building.description}</div>
          <div>Units:{building.units}</div>
          <button

          onClick={(event) => this.onClick()}> Up Vote </button>

          <p>Votes:{this.state.counter}</p>
        <br/>
      </div>
    );
  }
};

export default HomeBuilding;
