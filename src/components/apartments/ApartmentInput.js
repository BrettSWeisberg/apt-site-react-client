import React, { Component } from 'react';

class ApartmentInput extends Component {
  constructor(props) {
    super(props)
      this.state = {
        name:'',
        sf:'',
        baths: '',
        rooms: '',
        description:'',
        price:''
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
    var aptData = {
      name:this.state.name,
      sf: this.state.sf,
      baths: this.state.baths,
      rooms: this.state.rooms,
      description:this.state.description,
      price: this.state.price
    }

    this.props.addApartment({aptData, buildingId: this.props.buildingId });
    this.setState({
      name:'',
      sf:'',
      baths: '',
      rooms: '',
      description:'',
      price:''
    });
  }

  render() {

    return (

     <div>
     <h3> Create Apartment Below:</h3>
     <form onSubmit={(event) => this.handleOnSubmit(event)}>
     <label>Name:</label>
       <input
         type="text"
         name="name"
         value={this.state.name}
         onChange={(event) => this.handleOnChange(event)} />

       <br/>

       <label>Square Feet:</label>
       <input
         type="number"
         name="sf"
         value={this.state.sf}
         onChange={(event) => this.handleOnChange(event)} />
       <br/>

       <label>Rooms:</label>
       <input
         type="number"
         name="rooms"
         value={this.state.rooms}
         onChange={(event) => this.handleOnChange(event)} />
       <br/>

       <label>Baths:</label>
       <input
         type="number"
         name="baths"
         value={this.state.baths}
         onChange={(event) => this.handleOnChange(event)} />
       <br/>
       <label>Price:</label>
       <input
         type="number"
         name="price"
         value={this.state.price}
         onChange={(event) => this.handleOnChange(event)} />
       <br/>
       <label>Description:</label>
       <input
         type="text"
         name="description"
         value={this.state.description}
         onChange={(event) => this.handleOnChange(event)} />
       <br/>



         <input type="submit" value="Submit" />
     </form>
      </div>
    );
  }
};

export default ApartmentInput;
