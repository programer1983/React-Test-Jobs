import React from "react"
import './App.css'
import MyModal from "./MyModal"
import PostForm from "./PostForm"
import { usePosts } from "./usePostHook"

function App() {
  const [posts, setPosts] = React.useState([
    {id: 1, title: "Ract", body: "React"},
    {id: 2, title: "Redux", body: "Redux"},
    {id: 3, title: "Next", body: "Next"},
    {id: 4, title: "Django", body: "Django"},
    {id: 5, title: "Ruby", body: "Ruby"},
    {id: 6, title: "Java", body: "Java"},
  ])

  const [search, setSearch] = React.useState("")

  const searchPosts = usePosts(posts, search)

  return (
    <div className="App">

      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      
      <div className="posts__list">
        {searchPosts.map((post, index) => (
            <div key={post.id}  className="posts__desc">
                <strong>{post.title}</strong>
                <div>{post.body}</div>
            </div>
          ))}
      </div> 
    </div>
  );
}

export default App;
