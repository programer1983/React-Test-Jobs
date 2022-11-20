import React from "react"
import './App.css';

function App() {
  const [title, setTitle] = React.useState("")
  const [body, setBody] = React.useState("")
  const [posts, setPosts] = React.useState([
    {id: 1, title: "React", body: "React"},
    {id: 2, title: "Redux", body: "Redux"},
    {id: 3, title: "Next", body: "Next"},
  ])


  const addNewPost = (e) => {
    e.preventDefault()

    const newPost = {
      id: Date.now(),
      title,
      body,
    }
    setPosts([...posts, newPost])
    setTitle("")
    setBody("")
  }
 
  return (
    <div className="App">
      <div className="form">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter title"
        />

        <input
          value={body}
          onChange={(e) => setBody(e.target.value)}
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
