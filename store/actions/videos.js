export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';
export const GET_VIDEO_DETAIL = 'GET_VIDEO_DETAIL';

export const toogleFavourite = (id) => {
  return {
    type: TOGGLE_FAVOURITE,
    payload: {
      mealId: id
    }
  }
};

export const getVideoDetail = (id) => {
  return {
    type: GET_VIDEO_DETAIL,
    resourceId: id
  }
}