import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchBuildings } from '../../actions/buildingActions'
import { fetchApartments } from '../../actions/apartmentActions'
import HomeBuilding from './HomeBuilding'
import HomeApartment from './HomeApartment'

class HomeList extends Component {
  componentWillMount() {
    this.props.fetchBuildings()
    this.props.fetchApartments()
  }
//{ buildings.map(building => <div>{ building.name }</div>) }
  render() {
    let { buildings, apartments } = this.props

    return (
      <div>
        <h1 className = "title">Buildings</h1>
        { buildings.map(building => <HomeBuilding building={building}/>) }
        <h1 className = "title">Apartments</h1>
        { apartments.map(apartment => <HomeApartment apartment={apartment}/>) }
      </div>
    );
  }

};

const mapStateToProps = state => {
  return {
    buildings: state.buildings,
    apartments: state.apartments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBuildings: () => {
      let action = fetchBuildings()
      dispatch(action)
    },
    fetchApartments: () => {
      let action = fetchApartments()
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeList);
