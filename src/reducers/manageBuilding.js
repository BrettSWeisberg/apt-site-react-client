export default function manageBuildings(state = {
  buildings: [], reviews: []
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

      case 'ADD_REVIEW':

          let reviewId = Math.random()

          const review = {

            reviewId: reviewId,
            text: action.review.text,
            restaurantId: action.review.restaurantId
          }

          return { ...state, reviews: [...state.reviews, review]}

          case 'DELETE_REVIEW':
            debugger
              const reviews = state.reviews.filter(review => review.reviewId !== action.reviewId);

              return {...state, reviews }

    default:
      return state;
  }
};