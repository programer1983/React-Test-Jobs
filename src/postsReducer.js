import {SET_LOADING, SET_SUCCESS, SET_ERROR, SET_COLOR} from "./types"



const postsReducer = (state, action) => {
    switch(action.type){
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            }
        case SET_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload,
            }
        case SET_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case SET_COLOR:
            return {
                ...state,
                changeColor: !state.changeColor
            }
       default:
          return state
    }
}

export default postsReducer

