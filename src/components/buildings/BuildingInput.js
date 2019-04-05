import React, { Component } from 'react';

class BuildingInput extends Component {
  constructor(props) {
    super(props)
  this.state = {
    name: '',
    address: '',
    description: '',
    units: ''
  }
   this.handleOnChange = this.handleOnChange.bind(this);
   this.handleSubmit = this.handleOnSubmit.bind(this);
}

  handleOnChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    var data = {
      name:this.state.name,
      address: this.state.address,
      description: this.state.description,
      units: this.state.units
    };

    console.log('A')
    this.props.addBuilding(data);
    console.log('B')


    this.setState({
      name: '',
      address: '',
      description: '',
      units: ''
    });
  }

  render() {
    return (

  <section className= "section">
    <span className= "is-medium">
      <label className= "label">Create Apartment Buildings Below:</label>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <div className="field">
            <label className= "label">Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={(event) => this.handleOnChange(event)} />
            </div>
          <br/>
        <div className="field">
          <label className= "label">Address:</label>
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={(event) => this.handleOnChange(event)} />
          </div>
          <br/>

          <label className= "label">Description:</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={(event) => this.handleOnChange(event)} />
          <br/>
          <label className= "label">Units:</label>
          <input
            type="number"
            name="units"
            value={this.state.units}
            onChange={(event) => this.handleOnChange(event)} />
          <br/>



            <input type="submit" value="Submit" />
        </form>
        </span>
      </section>
    );
  }
};

export default BuildingInput;
