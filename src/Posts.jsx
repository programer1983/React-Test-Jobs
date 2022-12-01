import React from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Posts = () => {
  const [posts, setPosts] = React.useState([])
  const router = useNavigate()


  const fetchPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setPosts(response.data)
  }

  React.useEffect(() => {
    fetchPosts()
  })

  return (
    <div className='posts__list'>
      {posts.map((post, index) => (
        <div 
           className='posts__items' 
           key={post.id}
           onClick={() => router(`/posts/${post.id}`)}
          >
          <h2>{index + 1}. {post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts