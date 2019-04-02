var url = 'http://localhost:3001/apartments'

export function fetchApartments() {
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
      .then(apartments => {
        dispatch({
            type: "FETCH_APARTMENTS",
            payload: apartments
          })
      })
      .catch(err => err)
  }
}

export const addApartment = apartment => {

  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ apartment })

  }

  return dispatch => {

    fetch(url, data)
      .then(response => response.json())
      .then(apartment => dispatch({
        type: 'ADD_APARTMENT',
        payload: apartment
      }))
      .catch(err => err)
  }
}

export const deleteApartment = id => {

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
      .then(apartment => dispatch({
        type: 'DELETE_APARTMENT',
        payload: apartment
      }))
      .catch(err => err)
  }
}
