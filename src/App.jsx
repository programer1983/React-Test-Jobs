import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import Home from "./pages/Home"
import AddPost from './pages/AddPost';
import {data} from "./data"
import UpdatePost from './pages/UpdatePost';

function App() {
  const [posts, setPosts] = React.useState(data)
  const [post, setPost] = React.useState({first_name: "", last_name: ""})
  const [editPost, setEditPost] = React.useState({first_name: "", last_name: ""})
  const navigate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault()
      setPosts([...posts, {...post, id: Date.now()}])
      setPost({first_name: "", last_name: ""})
      navigate("/")
  }

  const handleEditPost = (id) => {
    const updatePost = {
      ...editPost,
      id: Date.now(),
    }
    const response = updatePost
    setPosts(posts.map(post => post.id === id ? {...response} : post))
    setEditPost({first_name: "", last_name: ""})
    navigate("/")
  }

 return (
    <div className="App">
          <Routes>
            <Route path='/' element={<Home posts={posts}/>}/>
            <Route 
              path='/addpost' 
              element={
              <AddPost 
                post={post} 
                setPost={setPost} 
                handleSubmit={handleSubmit}/>} 
              />
             <Route 
               path="/update/:id" 
               element={
               <UpdatePost
                 posts={posts}
                 editPost={editPost}
                 setEditPost={setEditPost}
                 handleEditPost={handleEditPost}/>}
              />
          </Routes>
    </div>
    )
}

export default App;
