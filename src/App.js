import React from "react"
import './App.css';
import PostsList from "./components/PostsList";

function App() {
  const [posts, setPosts] = React.useState([
    {id: 1, title: "React", body: "react library"},
    {id: 2, title: "React2", body: "react library2"},
    {id: 3, title: "React3", body: "react library3"},
  ])


  return (
    <div className="App">
      <PostsList posts={posts} title={"Posts List"}/>
    </div>
  );
}

export default App;
