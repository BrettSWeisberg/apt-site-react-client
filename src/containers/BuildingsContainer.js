import React, { Component } from 'react'
import BuildingInput from '../components/buildings/BuildingInput'
import Buildings from '../components/buildings/Buildings'
import { connect } from 'react-redux'

class BuildingsContainer extends Component {



  render() {
    return (
      <div>
        <BuildingInput addApartment={this.props.addApartment} />
        <Buildings apartments={this.props.apartments} delete={this.props.delete} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    buildings: state.buildings
  }
}

const mapDispatchToProps = dispatch => ({

  addApartment: apartment => dispatch({type: "ADD_BUILDING", payload: apartment }),
   delete: id => dispatch({type: 'DELETE_RESTAURANT', payload: id })
})

export default connect(mapStateToProps, mapDispatchToProps)(BuildingsContainer)
