export const TOGGLE_FAVOURITE_VIDEO = 'TOGGLE_FAVOURITE_VIDEO';
export const GET_VIDEO_DETAIL = 'GET_VIDEO_DETAIL';

export const toogleFavouriteVideo = (id) => {
  return {
    type: TOGGLE_FAVOURITE_VIDEO,
    resourceId: id
  }
};

export const getVideoDetail = (id) => {
  return {
    type: GET_VIDEO_DETAIL,
    resourceId: id
  }
}