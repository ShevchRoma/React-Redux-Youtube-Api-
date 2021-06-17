import { CHANNEL_VIDEOS_FAIL, CHANNEL_VIDEOS_REQUEST, CHANNEL_VIDEOS_SUCCESS,
   SELECTED_VIDEO_REQUEST,
   SELECTED_VIDEO_SUCCESS,
   SELECTED_VIDEO_FAIL } from "../reducers/video.reducer"

   import request from './../api/api';
  

   export const getVideoById = (id) => async dispatch => {
      try {
         dispatch({
            type: SELECTED_VIDEO_REQUEST,
         })
   
         const { data } = await request('/videos', {
            params: {
               part: 'snippet,statistics',
               id: id,
            },
         })
         dispatch({
            type: SELECTED_VIDEO_SUCCESS,
            payload: data.items[0],
         })
      } catch (error) {
         console.log(error.message)
         dispatch({
            type: SELECTED_VIDEO_FAIL,
            payload: error.message,
         })
      }
   }
   
export const getVideosChannel = (id='UCP_IYZTiqbmUqmI3KXHIEoQ') => async dispatch => {
    try {
       dispatch({
          type: CHANNEL_VIDEOS_REQUEST,
       })
 
       // 1. get upload playlist id
       const {
          data:{items}
       } = await request('/channels', {
          params: {
             part: 'contentDetails',
             id: id,
             //channel/UCP_IYZTiqbmUqmI3KXHIEoQ
          },
       })
        const uploadPlaylistId =  items[0].contentDetails.relatedPlaylists.uploads;
       // 2. get the videos using the id
       const { data } = await request('/playlistItems', {
          params: {
             part: 'snippet,contentDetails',
             playlistId: uploadPlaylistId,
             maxResults: 50,
          },
       })
  
       dispatch({
          type: CHANNEL_VIDEOS_SUCCESS,
          payload: data.items,
       })
    } catch (error) {
       console.log(error.response.data.message)
       dispatch({
          type: CHANNEL_VIDEOS_FAIL,
          payload: error.response.data,
       })
    }
}