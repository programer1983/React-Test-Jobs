import React from "react"
import './App.css'

function App() {
  const [posts, setPosts] = React.useState([
    {id: 1, title: "Ract", body: "React"},
    {id: 2, title: "Redux", body: "Redux"},
    {id: 3, title: "Next", body: "Next"},
    {id: 4, title: "Django", body: "Django"},
    {id: 5, title: "Ruby", body: "Ruby"},
    {id: 6, title: "Java", body: "Java"},
  ])

  const [searchPost, setSearchPost] = React.useState("")

  const searchedPosts = () => {
    return posts.filter(post => post.title.toLowerCase().includes(searchPost.toLowerCase()))
  }
 
  const searchpost = searchedPosts()

  return (
    <div className="App">
      <input 
         value={searchPost}
         type="text" 
         onChange={e => setSearchPost(e.target.value)}
         placeholder="Search"
      />

      
      <div className="posts__list">
        {searchpost.map((post) => (
            <div key={post.id} className="posts__desc">
                <strong>{post.title}</strong>
              <div>{post.body}</div>
            </div>
          ))}
      </div> 
    </div>
  );
}

export default App;
