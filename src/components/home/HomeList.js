import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactDom from 'react-dom';
import { fetchBuildings } from '../../actions/buildingActions'
import { fetchApartments } from '../../actions/apartmentActions'
import HomeBuilding from './HomeBuilding'
import HomeApartment from './HomeApartment'

class HomeList extends Component {
  constructor(props) {
    super(props)
      this.state = {
        order: [],
      }
      this.onClick = this.onClick.bind(this);

    }
  componentWillMount() {
    this.props.fetchBuildings()
    this.props.fetchApartments()
  }



onClick = event => {
  const newArray = [].concat(this.props.buildings)
  this.setState({
    order: newArray.sort(function(a,b){
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    })
  });
  //  ReactDom.render(<HomeList />,document.getElementById('buildings'))
  }


  render() {
   console.log(this.props.buildings)
    let { buildings, apartments } = this.props

    return (
        <div>
          <div>
            <button
              onClick={(event) => this.onClick()}>Sort </button>
          </div>
          <div id= "buildings">
            <h1 className = "title">Buildings</h1>
              { this.state.order.map(building => <HomeBuilding building={building}/>) }
          </div>
          <div>
        <h1 className = "title">Apartments</h1>
        { apartments.map(apartment => <HomeApartment apartment={apartment}/>) }
        </div>
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
