
export const CHANNEL_VIDEOS_SUCCESS = "CHANNEL_VIDEOS_SUCCESS";
export const CHANNEL_VIDEOS_FAIL = "CHANNEL_VIDEOS_FAIL";
export const CHANNEL_VIDEOS_REQUEST = "CHANNEL_VIDEOS_REQUEST";
export const SELECTED_VIDEO_REQUEST = 'SELECTED_VIDEO_REQUEST';
export const SELECTED_VIDEO_SUCCESS = 'SELECTED_VIDEO_SUCCESS';
export const SELECTED_VIDEO_FAIL = 'SELECTED_VIDEO_FAIL';

export const selectedVideoReducer = (state ={

   video: null

},action) =>{
     
   switch(action.type){
      case SELECTED_VIDEO_REQUEST:
         return{
            ...state,
         }
      case SELECTED_VIDEO_SUCCESS:
         return{
            ...state,
            video: action.payload
         }
      case SELECTED_VIDEO_FAIL:
         return{
            ...state,
            video: null,
            error: action.payload
         }
   
   default: 
   return state
      }

}
export const channelVideosReducer = (
    state = {
       loading: true,
       videos: [],
    },
    action
 ) => {
    
   switch (action.type) {
       case CHANNEL_VIDEOS_REQUEST:
          return {
             ...state,
          }
       case CHANNEL_VIDEOS_SUCCESS:
          return {
             ...state,
             videos: action.payload,
          }
       case CHANNEL_VIDEOS_FAIL:
          return {
             ...state,
             error: action.payload,
          }
 
       default:
          return state
    }
 }
 