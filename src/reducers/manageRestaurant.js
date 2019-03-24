export default function manageRestaurants(state = {
  buidlings: [], reviews: []
}, action) {
  switch (action.type) {



    case 'ADD_BUILDING':
        debugger
          let restaurantId = Math.random()

        const building = {
          id: restaurantId,
          name: action.payload.name,
          description: action.payload.description,
          address: action.payload.address,
          units: action.payload.units
        }

        return { ...state, restaurants: [...state.restaurants, building]}

      case 'DELETE_RESTAURANT':
           const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.payload);
            return { ...state, restaurants}

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
