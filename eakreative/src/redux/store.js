import {createStore,applyMiddleware,combineReducers} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {authReducer} from './reducers/auth.reducer'
import {channelVideosReducer,selectedVideoReducer} from './reducers/video.reducer';
import {commentListReducer} from './reducers/comments.reducer';


const rootReducer = combineReducers({
    auth:authReducer,
    getVideos: channelVideosReducer,
    selectedVideo: selectedVideoReducer,
    commentList:commentListReducer

})

const store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)));

export default store;
