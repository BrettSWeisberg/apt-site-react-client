import React, { Component } from 'react'
import HomeList from '../components/home/HomeList'
import { connect } from 'react-redux'


class HomePageContainer extends Component {

  // componentDidMount: function () {
  //      return
  //    }

  // onLoad: function () {
  //
  // }
//apartments{this.state.apartment} apartments{this.state.buidling}

  render() {
    
    return (
      <div>
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
