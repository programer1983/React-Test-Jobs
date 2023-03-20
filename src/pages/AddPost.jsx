import React from 'react'
import {Link} from "react-router-dom"

const AddPost = ({post, setPost, handleSubmit}) => {

  
    return (
        <form onSubmit={handleSubmit}>
            <input
              value={post.first_name}
              onChange={(e) => setPost({...post, first_name: e.target.value})}
              type="text"
              placeholder="Enter first name"
            />
            <input
              value={post.last_name}
              onChange={(e) => setPost({...post, last_name: e.target.value})}
              type="text"
              placeholder="Enter last name"
            />
            <button type="submit">Add Post</button>
            <Link to="/">Go to Home</Link>
        </form>
  )
}

export default AddPost 