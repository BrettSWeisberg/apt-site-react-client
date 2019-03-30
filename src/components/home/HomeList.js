import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchBuildings } from '../../actions/actions'
import HomeBuilding from './HomeBuilding'


class HomeList extends Component {
  componentWillMount() {
    this.props.fetchBuildings()
  }
//{ buildings.map(building => <div>{ building.name }</div>) }
  render() {
    let { buildings } = this.props

    return (
      <div>

        { buildings.map(building => <HomeBuilding building={building}/>) }
      </div>
    );
  }

};

const mapStateToProps = state => {
  return {
    buildings: state.buildings
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBuildings: () => {
      let action = fetchBuildings()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeList);
