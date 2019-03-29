import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchBuildings } from '../../actions/actions'

class HomeList extends Component {
  componentWillMount() {
    this.props.fetchBuildings()
  }

  render() {
    let { buildings } = this.props

    return (
      <div>
      <h1>Welcome!</h1>
        { buildings.map(building => <div>{ building.name }</div>) }
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
