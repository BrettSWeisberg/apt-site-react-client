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
        // 1. what are you sending
        //2. where am  i sending the data
        //3. create fetch or how does it work


        fetch("/api/addBuilding")

        return { ...state, buildings: [...state.buildings, building]}

      case 'DELETE_BUILDING':
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

          case 'DELETE_APARTMENT':
          
              const apartments = state.apartments.filter(apartment => apartment.apartmentID !== action.payload);

              return {...state, apartments }

    default:
      return state;
  }
};
