import React from 'react'
import {Link, useParams} from "react-router-dom"

function UpdatePost({posts, editPost, setEditPost, handleEditPost}) {
    const {id} = useParams()
    const post = posts.find(post => (post.id).toString() === id)


    return (
      <>
      <form onSubmit={(e) => e.stopPropagation()}>
        <input
            value={editPost.first_name}
            onChange={(e) => setEditPost({...editPost, first_name: e.target.value})}
            type="text"
            placeholder="Edit first name"
        />
        <input
            value={editPost.last_name}
            onChange={(e) => setEditPost({...editPost, last_name: e.target.value})}
            type="text"
            placeholder="Edit last name"
        />
        <button onClick={() => handleEditPost(post.id)} type="submit">Edit Post</button>
        <Link to="/">Go to Home</Link>
     </form>
    </>
  )
}

export default UpdatePost