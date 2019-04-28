import React, { Component } from 'react';
import  "./Buildings.css";
import { Button, Form } from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

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
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">

              <form onSubmit={(event) => this.handleOnSubmit(event)}>
                <h3 className= "className="h5 text-center mb-4>Create Apartment Buildings Below:</h3>
                <MDBInput
                  label="Name"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={(event) => this.handleOnChange(event)}
                />
                <MDBInput
                  label="Address"
                  type="text"
                  name="address"
                  value={this.state.address}
                  onChange={(event) => this.handleOnChange(event)}
                />
                <MDBInput
                  label="Description"
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={(event) => this.handleOnChange(event)}
                />
                <MDBInput
                  label="Units"
                  type="number"
                  name="units"
                  value={this.state.units}
                  onChange={(event) => this.handleOnChange(event)}
                />
                <MDBBtn color="primary" type="submit">
                  Submit
                </MDBBtn>
              </form>
          </MDBCol>
       </MDBRow>
     </MDBContainer>
    );
  }
};

export default BuildingInput;
