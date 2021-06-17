import request from "../api/api"

export const COMMENT_LIST_SUCCESS = "COMMENT_LIST_SUCCESS"
export const COMMENT_LIST_FAIL = "COMMENT_LIST_FAIL"
export const COMMENT_LIST_REQUEST = "COMMENT_LIST_REQUEST"


export const getCommentsOfVideoById = id => async dispatch =>{

    dispatch({
        type: COMMENT_LIST_REQUEST
    })

    const {data} = await request('/commentThreads',{
        params:{
            part: 'snippet',
            videId: id
        },
    })
    dispatch({
        type: COMMENT_LIST_SUCCESS,
        payload: data.items
    })
    dispatch({
        type: COMMENT_LIST_FAIL,
        
    })
}