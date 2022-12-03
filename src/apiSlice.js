import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    loading: false,
    posts: [],
    error: ""
}


const fetchPosts = createSlice({
    name: "fetch",
    initialState,
    reducers: {
        setLoading(state){
            state.loading = true
        },
        setPosts(state, action){
            state.loading = false
            state.posts = action.payload
        },
        setError(state, action){
            state.loading = false
            state.error = action.payload
        }
    }
})

export const {setLoading, setPosts, setError} = fetchPosts.actions

export default fetchPosts.reducer