import React, { Component } from 'react';


class HomeBuilding extends Component {
  constructor(props) {
    super(props)
      this.state = {
        counter: 0,
        input: '',
        feedback: []

      }
      this.onClick = this.onClick.bind(this);
      this.handleSubmit = this.handleOnSubmit.bind(this);
    }

  onClick = event => {

    this.setState({
      counter: this.state.counter + 1,

    });
  }

  handleOnSubmit = event => {
    event.preventDefault();

    this.setState({
      feedback: [this.state.feedback, event.target.value]

    });

    this.setState({
      input: '',
    });
  }

  handleOnChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  // renderBuildings = () => {
  //   return  this.state.buildings.map(building =>
  //    <Building key={building.id} deleteBuilding={this.props.deleteBuilding} building={building} />)
  // }

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

          <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            name="input"
            value={this.state.input}
            onChange={(event) => this.handleOnChange(event)}
             />
             <input type="submit" value="Submit" />
           </form>
           <ul>
           {this.state.feedback.map(msg =>(
             <li>{msg}</li>
           ))}
           </ul>
        <br/>
      </div>
    );
  }
};

export default HomeBuilding;
