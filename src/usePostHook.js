import React from "react"


export const usePosts = (posts, search) => {
    const searchPosts = React.useMemo(() => {
        return  posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))
    }, [posts, search])

    return searchPosts
}