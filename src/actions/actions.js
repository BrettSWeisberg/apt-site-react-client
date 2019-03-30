import axios from 'axios'; ///

var url = 'http://localhost:3001/buildings'

//const baseUrl = 'http://localhost:3001'

//export const addBuilding = (building) => {
//  return {type: "ADD_BUILDING", payload: building }

export function fetchBuildings() {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch(url, data)
      .then(response => response.json())
      .then(buildings => {
        

        dispatch({
            type: "FETCH_BUILDINGS",
            payload: buildings
          })
      })
      .catch(err => err)
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
