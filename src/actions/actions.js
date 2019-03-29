import axios from 'axios'; ///


//const baseUrl = 'http://localhost:3001'

//export const addBuilding = (building) => {
//  return {type: "ADD_BUILDING", payload: building }

export function fetchBuildings(){
  const request = axios.get('http://localhost:3001/buildings');

  return (dispatch) => {
    request.then(buildings => {
    //  dispatch ({type:'FETCH_BUILDINGS', payload: data})
       this.setState({buildings: buidlings.data})
  });
}
}
//   let data = {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization': sessionStorage.jwt
//     },
//     body: JSON.stringify({ building })
//   }
//
//   return dispatch => {
//     fetch(`${ baseUrl }/buildings`, data)
//       .then(response => response.json())
//       .then(building => dispatch({
//         type: 'ADD_BUILDING',
//         payload: {
//           name: action.payload.name,
//           description: action.payload.description,
//           address: action.payload.address,
//           units: action.payload.units
//         }
//       }))
//       .catch(err => err)
//   }
// }
// let building = {
// name: action.payload.name,
// description: action.payload.description,
// address: action.payload.address,
// units: action.payload.units
// }
// axios.post('http://localhost:3001/building', { building })
//      .then(res => {
//        console.log(res);
//        console.log(res.data);
//      })
//  }
