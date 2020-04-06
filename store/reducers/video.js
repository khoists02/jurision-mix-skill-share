import { Videos } from '../../data/video';
import { GET_VIDEO_DETAIL } from '../actions/videos';

const initialState = {
  videos: Videos,
  favouriteVideos: Videos,
  videoDetail: null
}

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEO_DETAIL: {
      const resourceId = action.resourceId;
      return { ...state, videoDetail: state.videos.find(x=> x.resourceId === resourceId) }
    }
    default:
      return state;
  }
}

export default videoReducer;