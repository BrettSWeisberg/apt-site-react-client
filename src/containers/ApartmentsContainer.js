import React, { Component } from 'react';
import ApartmentInput from '../components/apartments/ApartmentInput'
import Apartments from '../components/apartments/Apartments'
import { connect } from 'react-redux'

//import { bindActionCreators } from 'redux'
import { addApartment, deleteApartment } from '../actions/apartmentActions'

class ApartmentsContainer extends Component {
  render() {

    return (
      <div>
        <ApartmentInput
          addApartment={this.props.addApartment}
          buildingId={this.props.building.id}
        />
        <Apartments
          apartments={this.props.apartments}
          buildingId={this.props.building.id}
          deleteApartment={this.props.deleteApartment}
        />
      </div>
    );
  }
}

const mapStateToProps = ({apartments}) => {
  return {apartments}
}


// const mapDispatchToProps = dispatch => bindActionCreators({
//    addApartment,
//    deleteApartment
// }, dispatch)


const mapDispatchToProps = dispatch => {
  return {
    addApartment: (apartment) => {
      let action = addApartment(apartment)
      dispatch(action)
    },
    deleteApartment: () => {
      let action = deleteApartment()
      dispatch(action)
    },
  }
}

// const mapDispatchToProps = dispatch => ({
//   addApartment: apartment => dispatch({type: 'ADD_APARTMENT', payload: apartment}),
//   deleteApartment: apartmentID => dispatch({type: 'DELETE_APARTMENT', apartmentID})
// })

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentsContainer)
