import React from 'react'

const PostIrem = ({post}) => {
  return (
    <div>
        <div>
            {post.title}
            {post.body}
        </div>
    </div>
  )
}

export default PostIrem