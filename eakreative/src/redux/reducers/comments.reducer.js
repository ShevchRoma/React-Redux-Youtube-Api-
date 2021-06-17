import {COMMENT_LIST_SUCCESS,
COMMENT_LIST_FAIL, 
COMMENT_LIST_REQUEST} from './../actions/comments.action';


export const commentListReducer = (state={
    comments: null
},action) =>{
     switch(action.type){
         case COMMENT_LIST_REQUEST:
             return{
                  ...state,

             }
         case COMMENT_LIST_SUCCESS:
             return{
                 ...state,
                 comments: action.payload
             }
         case COMMENT_LIST_FAIL:
             return{
                 ...state,
                 error: action.payload
             }
        default: 
        return state;
     }
}