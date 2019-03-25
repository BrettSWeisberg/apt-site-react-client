export default function manageBuildings(state = {
  buildings: [], apartments: []
}, action) {
  switch (action.type) {



    case 'ADD_BUILDING':

          let buildingId = Math.random()

        const building = {
          id: buildingId,
          name: action.payload.name,
          description: action.payload.description,
          address: action.payload.address,
          units: action.payload.units
        }

        return { ...state, buildings: [...state.buildings, building]}

      case 'DELETE_RESTAURANT':
           const buildings = state.buildings.filter(building => building.id !== action.payload);
            return { ...state, buildings}

      case 'ADD_APARTMENT':
      
          let apartmentID = Math.random()

          const apartment = {
            apartmentID: apartmentID,
            buildingID: action.payload.buildingId,
            name:action.payload.aptData.name,
            sf: action.payload.aptData.sf,
            baths: action.payload.aptData.baths,
            rooms: action.payload.aptData.rooms,
            description:action.payload.aptData.description,
            price: action.payload.aptData.price,
          }

          return { ...state, apartments: [...state.apartments, apartment]}

          case 'DELETE_REVIEW':
            debugger
              const reviews = state.reviews.filter(review => review.reviewId !== action.reviewId);

              return {...state, reviews }

    default:
      return state;
  }
};
