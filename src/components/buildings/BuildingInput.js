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

    this.props.addBuilding(data);


    this.setState({
      name: '',
      address: '',
      description: '',
      units: ''
    });
  }

  render() {
    return (

  <section class= "section">
    <span class = "is-medium">
      <label class= "label">Create Apartment Buildings Below:</label>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <div class="field">
            <label class= "label">Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={(event) => this.handleOnChange(event)} />
            </div>
          <br/>
        <div class="field">
          <label class= "label">Address:</label>
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={(event) => this.handleOnChange(event)} />
          </div>
          <br/>

          <label class= "label">Description:</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={(event) => this.handleOnChange(event)} />
          <br/>
          <label class= "label">Units:</label>
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
