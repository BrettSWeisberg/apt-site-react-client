// export function fetchCats() {
//   return (dispatch) => {
//     dispatch({ type: 'LOADING_CATS' });
//     return fetch('http://localhost:4000/db')
//       .then(response => response.json())
//       .then(cats => dispatch({ type: 'FETCH_CATS', payload:cats.images}));
//   };
// }

export const createBuilding = building => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    },
    body: JSON.stringify({ building })
  }

  return dispatch => {
    fetch(`${ baseUrl }/buildings`, data)
      .then(response => response.json())
      .then(building => dispatch({
        type: 'ADD_BUILDING',
        payload: {
          name: action.payload.name,
          description: action.payload.description,
          address: action.payload.address,
          units: action.payload.units
        }
      }))
      .catch(err => err)
  }
}
