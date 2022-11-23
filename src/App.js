import React from "react"
import './App.css'
import MyModal from "./MyModal"
import PostForm from "./PostForm"

function App() {
  const [posts, setPosts] = React.useState([
    {id: 1, title: "Ract", body: "React"},
    {id: 2, title: "Redux", body: "Redux"},
    {id: 3, title: "Next", body: "Next"},
    {id: 4, title: "Django", body: "Django"},
    {id: 5, title: "Ruby", body: "Ruby"},
    {id: 6, title: "Java", body: "Java"},
  ])

  const [modal, setModal] = React.useState(false)

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  return (
    <div className="App">
      <button className="button" onClick={() => setModal(true)}>Create Post</button>
      
       <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={addNewPost} />
       </MyModal>
     
      <div className="posts__list">
        {posts.map((post, index) => (
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
