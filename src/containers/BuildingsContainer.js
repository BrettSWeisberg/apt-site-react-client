import React, { Component } from 'react'
import BuildingInput from '../components/buildings/BuildingInput'
import Buildings from '../components/buildings/Buildings'
import { connect } from 'react-redux'

class BuildingsContainer extends Component {



  render() {
    
    return (
      <div>
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

  addBuilding: building => dispatch({type: "ADD_BUILDING", payload: building }),
   delete: id => dispatch({type: 'DELETE_RESTAURANT', payload: id })
})

export default connect(mapStateToProps, mapDispatchToProps)(BuildingsContainer)
