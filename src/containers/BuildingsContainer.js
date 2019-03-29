import React, { Component } from 'react'
import BuildingInput from '../components/buildings/BuildingInput'
import Buildings from '../components/buildings/Buildings'
import { connect } from 'react-redux'
// import {addBuilding} from '../actions/actions'


class BuildingsContainer extends Component {



  render() {

    return (
      <div class="container has-text-centered">
        <BuildingInput addBuilding={this.props.addBuilding} />
        <Buildings buildings={this.props.buildings} delete={this.props.delete} />
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

  addBuilding: building => dispatch({type: "ADD_BUILDING", payload: building }), // addBuilding()
   delete: id => dispatch({type: 'DELETE_BUILDING', payload: id })
})

export default connect(mapStateToProps, mapDispatchToProps)(BuildingsContainer)
