import React from "react"
import './App.css'
import Select from "./components/Select"

function App() {
  const [postsSort, setPostsSort] = React.useState("")
  const [posts, setPosts] = React.useState([
    {id: 1, title: "aa", body: "aa"},
    {id: 2, title: "гг", body: "гг"},
    {id: 3, title: "bb", body: "bb"},
  ])

  const sprtedPosts = (sort) => {
    setPostsSort(sort)
    setPosts([...posts.sort((a,b) => a[sort].localeCompare(b[sort]))])
  }


  return (
    <div className="App">
      <div className="select">
        <Select
          value={postsSort}
          sprtedPosts={sprtedPosts}
          defaultname="Select"
          options={[
            {value: "title", name: "By title"},
            {value: "body", name: "By description"},
          ]}
        />
      </div>
      
      <div className="posts__list">
        {posts.map((post) => (
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
