export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';

export const toogleFavourite = (id) => {
  return {
    type: TOGGLE_FAVOURITE,
    payload: {
      mealId: id
    }
  }
};