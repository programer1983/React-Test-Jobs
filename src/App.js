import React from "react"
import './App.css'
import axios from "axios"

function App() {
  const [posts, setPosts] = React.useState([])

  async function fetchPosts(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setPosts(response.data)
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
