import React, { Component } from 'react'
//import BuildingInput from '../components/buildings/HomeList'
import HomeList from '../components/home/HomeList'
import { connect } from 'react-redux'

class HomePageContainer extends Component {
  render() {

    return (
      <div>
        <HomeList />
      </div>
    )
  }
}

export default HomePageContainer
