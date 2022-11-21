import React from "react"
import './App.css';

function App() {
 const [post, setPost] = React.useState({title: "", body: ""})
  const [posts, setPosts] = React.useState([
    {id: 1, title: "React", body: "React"},
    {id: 2, title: "Redux", body: "Redux"},
    {id: 3, title: "Next", body: "Next"},
  ])


  const addNewPost = (e) => {
    e.preventDefault()

    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: "", body: ""})
  }
 
  return (
    <div className="App">
      <div className="form">
        <input
          value={post.title}
          onChange={(e) => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="Enter title"
        />

        <input
          value={post.body}
          onChange={(e) => setPost({...post, body: e.target.value})}
          type="text"
          placeholder="Enter description"
        />
        <button type="button" onClick={addNewPost}>Add Post</button>
    </div>
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
