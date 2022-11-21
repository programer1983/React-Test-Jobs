import React from 'react'

const PostForm = ({create}) => {
  const [post, setPost] = React.useState({title: "", body: ""})

  const addNewPost = (e) => {
    e.preventDefault()

    const newPost = {
        ...post,
        id: Date.now(),
    }
    create(newPost)
    setPost({title: "", body: ""})
  }
  
  
  return (
    <div className="form">
        <input
            value={post.title}
            onChange={(e) => setPost({...post, title: e.target.value})}
            type="text"
            placeholder="Enter title"
        />

        <input
            value={post.body}
            onChange={(e) => setPost({...post, body: e.target.value})}
            type="text"
            placeholder="Enter description"
        />
    <button type="button" onClick={addNewPost}>Add Post</button>
</div>
  )
}

export default PostForm