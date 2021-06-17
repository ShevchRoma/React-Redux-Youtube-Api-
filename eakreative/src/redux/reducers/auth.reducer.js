const initialState = {
    accessToken:null,
    user:null,
    loading:false
}

export const authReducer = (prevState = initialState,action) =>{
   
    const {type,payload} = action

    switch(type){
        case LOGIN_REQUEST:
            return {
                ...prevState,
                loading: true,
            }
            case LOGIN_SUCCESS:
                return{
                    ...prevState,
                    accessToken: payload,
                    loading: false
                    
                }
            case LOGIN_FAIL:
                return{
                    ...prevState,
                    accessToken: null,
                    loading: false,
                    error: payload
                }
                case LOAD_PROFILE:
                    return{
                        ...prevState,
                        user: payload,
                }

            
            default: return prevState
    }
}

export const LOGIN_SUCCESS = "LOGIN_SUCCES"
export const LOGIN_FAIL = "LOGIN_FAIL"
export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOG_OUT = 'LOG_OUT'
export const LOAD_PROFILE = 'LOAD_PROFILE'
