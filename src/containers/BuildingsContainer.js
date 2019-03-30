import React, { Component } from 'react'
import BuildingInput from '../components/buildings/BuildingInput'
import Buildings from '../components/buildings/Buildings'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
 import * as { actionCreators } from '../actions/actions'


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

// const mapDispatchToProps = dispatch => ({
//
//   addBuilding: building => dispatch({type: "ADD_BUILDING", payload: building })
//    delete: id => dispatch({type: 'DELETE_BUILDING', payload: id })
// })

const mapDispatchToProps = dispatch => bindActionCreators({
   addBuilding
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(BuildingsContainer)
