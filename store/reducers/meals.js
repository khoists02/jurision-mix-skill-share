import { TOGGLE_FAVOURITE } from '../actions/meals';

const initialState = {
  meals: [],
  filtered: [],
  favouriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingIndex = state.favouriteMeals.findIndex(meal=> meal.id === action['payload'].mealId);
      if (existingIndex >= 0) {
        const updateFavMeals = [...state.favouriteMeals];
        updateFavMeals.splice(existingIndex, 1);
        return { ...state, favouriteMeals:  updateFavMeals};
      } else {
        const meal = state.meals.find(meal=> meal.id === action['payload'].mealId);
        return { ...state, favouriteMeals: state.favouriteMeals.concat(meal) };
      }
    default:
    return state;
  }
}

export default mealsReducer;