import React, { Component } from 'react';
import  "./Buildings.css";
import { Button, Form } from 'react-bootstrap';

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
    <div className="container">
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <h3 className= "form-label">Create Apartment Buildings Below:</h3>
          <div className="form-group">
            <label className="field-label">Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={(event) => this.handleOnChange(event)} />
          </div>
          <br/>
            <div className="form-group">
              <label className="field-label">Address:</label>
              <input
                type="text"
                name="address"
                value={this.state.address}
                onChange={(event) => this.handleOnChange(event)} />
            </div>
          <br/>
            <div className="form-group">
              <label className="field-label">Description:</label>
              <input
                type="text"
                name="description"
                value={this.state.description}
                onChange={(event) => this.handleOnChange(event)} />
            </div>
          <br/>
          <div className="form-group">
          <label className="field-label">Units:</label>
          <input
            type="number"
            name="units"
            value={this.state.units}
            onChange={(event) => this.handleOnChange(event)} />
            </div>
            <Button className="Button" type="submit" value="Submit">
              Submit
            </Button>


        </form>
    </div>
    );
  }
};

export default BuildingInput;
