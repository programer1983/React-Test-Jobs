import React from "react"
import './App.css'
import {useSelector, useDispatch} from "react-redux"
import {setLoading, setPosts, setError} from "./apiSlice"
import axios from "axios"

function App() {
  const {loading, posts, error} = useSelector(state => state.postsFetch)
  const dispatch = useDispatch()

 const fetchPostsApi = async () => {
    try {
      dispatch(setLoading())
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      dispatch(setPosts(response.data))
    }catch(e){
      dispatch(setError(e.message))
    }
 }

  React.useEffect(() => {
    fetchPostsApi()
  }, [])


  if (loading) {
      return <h1 className="message">Loading is process!</h1>
  }
 

  return (
      <div className="App">
        {error ? (
          <h1 className="message">Loading error!</h1>
          ) : (
            <div className="posts__list">
              <h1 style={{
                  textAlign: "center",
                  marginTop: "50px",
                  marginBottom: "50px",
                  color: "green",
                }}>
                  Posts List
              </h1>
              {posts.map((post, index) => (
                <div key={post.id} className="post__items">
                  <h2>{index + 1}. {post.title}</h2>
                  <p>{post.body}</p>
                </div>
              ))}
            </div>
          )}
      </div>
    );
}

export default App;
