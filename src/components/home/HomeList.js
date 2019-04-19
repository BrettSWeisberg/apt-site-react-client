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
        ordered: 'NO',
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
    ordered: 'YES',
    order: newArray.sort(function(a,b){
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    })
  });
  }

  renderBuildings = () => {
    if(this.state.ordered === "NO"){
    return  this.props.buildings.map(building =>
     <HomeBuilding building={building}/>)
   } else {
     {return this.state.order.map(building => <HomeBuilding building={building}/>) }
   }
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
              {this.renderBuildings()}

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
