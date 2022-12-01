import React from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"


const PostPage = () => {
  const [post, setPost] = React.useState({})
  const [comment, setComment] = React.useState([])
  const params = useParams()

    
  const getPostById = async (id) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
    setPost(response.data)
  }

  const getPostComment = async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    setComment(response.data)
  }

  React.useEffect(() => {
    getPostById(params.id)
    getPostComment(params.id)
  }, [])
  
  
  
  return (
    <div>
        <h1>You have opened a post page with ID {params.id} </h1>
        <div style={{marginLeft: "430px", marginTop: "40px", width: "500px"}}><h2>{post.id}. {post.title}</h2></div>
        <h2 style={{marginLeft: "570px", marginTop: "40px"}}>Comments</h2>
        <div className='post__comment'>
            {comment.map((com) => (
                <div key={com.id} className='comment__item'>
                    <h3>{com.email}</h3>
                    <div>{com.body}</div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default PostPage