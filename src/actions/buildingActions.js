var url = 'http://localhost:3001/buildings'

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

export const addBuilding = building => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ building })
  }

  return dispatch => {

    fetch(url, data)
      .then(response => response.json())
      .then(building => dispatch({
        type: 'ADD_BUILDING',
        payload: building
      }))
      .catch(err => err)
  }
}

export const deleteBuilding = id => {
  let data = {
    method: 'delete',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {

     fetch(`${ url }/${ id }`, data)
      .then(response => response.json())
      .then(building => dispatch({
        type: 'DELETE_BUILDING',
        payload: building
      }))
      .catch(err => err)
  }
}
