import { Videos } from '../../data/video';
import { GET_VIDEO_DETAIL, TOGGLE_FAVOURITE_VIDEO  } from '../actions/videos';

const initialState = {
  videos: Videos,
  favouriteVideos: [],
  videoDetail: null
}

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE_VIDEO: {
      const resourceId = action.resourceId;
      const existsFavIndex = state.favouriteVideos.findIndex(x=> x.resourceId === resourceId);
      if (existsFavIndex >= 0) {
        // When has favourite
        const updatedFavVideos = [...state.favouriteVideos];
        const updatedVideos = [ ...state.videos ]; 
        updatedFavVideos.splice(existsFavIndex, 1);
        updatedVideos.forEach((item)=> {
          if (item.resourceId === resourceId){
            item.isFav = false;
          }
        })
        return {
          ...state,
          favouriteVideos: updatedFavVideos,
          videos: updatedVideos
        };
      } else {
        const video = state.videos.find(x=> x.resourceId === resourceId);
        const updatedVideos = [ ...state.videos ];
        updatedVideos.forEach((item)=> {
          if (item.resourceId === resourceId){
            item.isFav = true;
          }
        })
        return {
          ...state,
          favouriteVideos: [video, ...state.favouriteVideos],
          videos: updatedVideos
        };
      }
    }
    case GET_VIDEO_DETAIL: {
      const resourceId = action.resourceId;
      return {
        ...state,
        videoDetail: state.videos.find(x=> x.resourceId === resourceId)
      }
    }
    default:
      return state;
  }
}

export default videoReducer;