export default function manageBuildings(state = {
  buildings: [], apartments: []
}, action) {
  switch (action.type) {

    case 'FETCH_BUILDINGS':
      return { ...state, buildings: action.payload }

    case 'ADD_BUILDING':

      return { ...state, buildings: [...state.buildings, action.payload]}

    case 'DELETE_BUILDING':
      const buildings = state.buildings.filter(building => building.id !== action.payload.id);
      return { ...state, buildings}

      case 'FETCH_APARTMENTS':
        return { ...state, apartments: action.payload }

    case 'ADD_APARTMENT':
      return { ...state, apartments: [...state.apartments, action.payload]}

    case 'DELETE_APARTMENT':
      const apartments = state.apartments.filter(apartment => apartment.apartmentID !== action.payload.id);
      return {...state, apartments }

    default:
      return state;
  }
};
