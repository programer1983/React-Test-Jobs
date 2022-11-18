import React from 'react'
import PostIrem from './PostIrem'

const PostsList = ({posts, title}) => {
  return (
    <div className='posts__list'>
        <h1>{title}</h1>
        {posts.map((post) => {
            return <PostIrem key={post.id} post={post}/>
        })}
    </div>
  )
}

export default PostsList