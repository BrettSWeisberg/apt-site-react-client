export default function manageRestaurants(state = {
  restaurants: [], reviews: []
}, action) {
  switch (action.type) {



    case 'ADD_RESTAURANT':
      debugger
          let restaurantId = Math.random()

        const restaurant = {
          id: restaurantId,
          name: action.payload,

        }

        return { ...state, restaurants: [...state.restaurants, restaurant]}

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
