import React, { Component } from 'react';
import  "./Apartments.css";

class ApartmentInput extends Component {
  constructor(props) {
    super(props)
      this.state = {
        name:'',
        sf:'',
        baths: '',
        rooms: '',
        description:'',
        price:'',
        building_id: ''
      }
      this.handleOnChange = this.handleOnChange.bind(this);
      this.handleSubmit = this.handleOnSubmit.bind(this);
    }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnSubmit = event => {

    event.preventDefault();

    var apartment = {
      name:this.state.name,
      sf: this.state.sf,
      baths: this.state.baths,
      rooms: this.state.rooms,
      description:this.state.description,
      price: this.state.price,
      building_id: this.props.buildingId
    }

    this.props.addApartment(apartment);
    this.setState({
      name:'',
      sf:'',
      baths: '',
      rooms: '',
      description:'',
      price:'',
      building_id: ''
    });
  }

  render() {

    return (
     <div className="apartment-template">
      <form className="apartment-form" onSubmit={(event) => this.handleOnSubmit(event)}>
        <label className="form-label"> Create Apartment Below:</label>
          <div className="field">
            <label className="field-label">Name:</label>
             <input
               type="text"
               name="name"
               value={this.state.name}
               onChange={(event) => this.handleOnChange(event)} />
          </div>
          <br/>
          <div className="field">
           <label className="field-label">Square Feet:</label>
           <input
             type="number"
             name="sf"
             value={this.state.sf}
             onChange={(event) => this.handleOnChange(event)} />
          </div>
          <br/>
          <div className="field">
           <label className="field-label">Rooms:</label>
           <input
             type="number"
             name="rooms"
             value={this.state.rooms}
             onChange={(event) => this.handleOnChange(event)} />
          </div>
          <br/>
          <div className="field">
           <label className="field-label">Baths:</label>
           <input
             type="number"
             name="baths"
             value={this.state.baths}
             onChange={(event) => this.handleOnChange(event)} />
          </div>
          <br/>
          <div className="field">
           <label className="field-label">Price:</label>
           <input
             type="number"
             name="price"
             value={this.state.price}
             onChange={(event) => this.handleOnChange(event)} />
          </div>
          <br/>
          <div className="field">
           <label className="field-label">Description:</label>
           <input
             type="text"
             name="description"
             value={this.state.description}
             onChange={(event) => this.handleOnChange(event)} />
          </div>
          <br/>
         <input className="button" type="submit" value="Submit" />
     </form>
      </div>
    );
  }
};

export default ApartmentInput;
