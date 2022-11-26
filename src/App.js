import React from "react"
import './App.css'
import PostService from "./PostService"

function App() {
  const [posts, setPosts] = React.useState([])

  async function fetchPosts(){
    const posts = await PostService.getAll()
    setPosts(posts)
  }

  React.useEffect(() => {
    fetchPosts()
  }, [])

  console.log(posts)
  
  
  return (
    <div className="App">
      <div className="posts__list">
        {posts.map((post, index) => (
            <div key={post.id}  className="posts__desc">
                <strong>{index + 1}. {post.title}</strong>
                <div>{post.body}</div>
            </div>
          ))}
      </div> 
    </div>
  );
}

export default App;
