import React from "react"
import './App.css';
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = React.useState([
    {id: 1, title: "React", body: "React"},
    {id: 2, title: "Redux", body: "Redux"},
    {id: 3, title: "Next", body: "Next"},
  ])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
 
  return (
    <div className="App">
      <PostForm create={createPost} />
     
      <div className="posts__list">
        {posts.map((post) => (
            <div key={post.id} className="posts__desc">
                <strong>{post.title}</strong>
              <div>
                {post.body}
              </div>
            </div>
          ))}
      </div> 
    </div>
  );
}

export default App;
