import React from 'react'

const PostForm = ({create}) => {
 const [post, setPost] = React.useState({title: "", body: ""})

 const addNewPost = (e) => {
    e.preventDefault()

    const newPost = {
        ...post,
        id: Date.now()
    }
    create(newPost)
    setPost({title: "", body: ""})
 }


  return (
    <form onSubmit={addNewPost}>
        <input
            type="text"
            value={post.title}
            onChange={e => setPost({...post, title: e.target.value})}
            placeholder="Enter Title"
        />
        <input
            type="text"
            value={post.body}
            onChange={e => setPost({...post, body: e.target.value})}
            placeholder="Enter Description"
        />
        <div>
          <button type="submit">Add Post</button>
        </div>
  </form>
  )
}

export default PostForm