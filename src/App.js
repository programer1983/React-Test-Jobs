import React from "react"
import './App.css'

function App() {
  const [posts, setPosts] = React.useState([
    {id: 1, title: "React", body: "React"},
    {id: 2, title: "Redux", body: "Redux"},
    {id: 3, title: "Next", body: "Next"},
  ])


 const deletePost = (id) => {
  setPosts(posts.filter(post => post.id !== id))
 }
 
  return (
    <div className="App">
      <div className="posts__list">
        {posts.length === 0 ? (
          <div className="message" style={{color: "red"}}><h1>Messge not found!</h1></div>
           ) : (
            posts.map((post) => (
            <div key={post.id} className="posts__desc">
                <strong>{post.title}</strong>
              <div>
                {post.body}
              </div>
              <button onClick={() => deletePost(post.id)}>Delete</button>
            </div>
          )))}
      </div> 
    </div>
  );
}

export default App;
