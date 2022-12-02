import React from "react"
import {SET_LOADING, SET_SUCCESS, SET_ERROR} from "./types"
import axios from "axios"
import PostsReducer from "./postsReducer"
import ApiContext from "./Context"


const initialState = {
    loading: false,
    posts: [],
    error: "",
    changeColor: false,
}

const ShowState = (props) => {
    const [state, dispatch] = React.useReducer(PostsReducer, initialState)

    const fetchPosts = async () => {
         try {
            dispatch({type: SET_LOADING})
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(data)
            dispatch({type: SET_SUCCESS, payload: data})
         }catch(error){
            dispatch({type: SET_ERROR, payload: error })
         }
    }

    return (
        <ApiContext.Provider
            value={{
                loading: state.loading,
                posts: state.posts,
                error: state.error,
                changeColor: state.changeColor,
                fetchPosts,
                dispatch,
            }}
    >
        {props.children}
    </ApiContext.Provider>
    )
}

export default ShowState





