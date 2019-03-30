import React, { Component } from 'react'
import HomeList from '../components/home/HomeList'
import { connect } from 'react-redux'


class HomePageContainer extends Component {

  render() {

    return (
      <div>
      <h1>Welcome!</h1>
        <HomeList />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    buildings: state.buildings,
    apartments: state.apartments
  }
}
export default connect(mapStateToProps)(HomePageContainer)
