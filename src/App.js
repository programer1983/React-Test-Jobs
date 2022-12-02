import React from "react"
import './App.css'
import ApiContext from "./Context"


function App() {
  const {fetchPosts, posts, error, changeColor, dispatch} = React.useContext(ApiContext)


 React.useEffect(() => {
  fetchPosts()
 }, [])

 if (error) {
    return <h1 className="message">Errror for connect!</h1>
 }

 const handleClick = () => {
      dispatch({type: "SET_COLOR"})
 }
  
 
 return (
    <div className="App" 
        style={{
          backgroundColor: changeColor ? "#222" : "white", 
          color: changeColor &&  "white"
        }}>

        <button onClick={handleClick}>Change Color</button>
      
        <div className="posts__list">
          {posts.map((post, index) => (
            <div key={post.id} className="post__item">
              <h2>{index + 1}. {post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
    </div>
  );
}

export default App;
