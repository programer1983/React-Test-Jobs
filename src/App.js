import React from "react"
import './App.css'
import PostService from "./PostServuce"
import {getPageCount, getPagesArray} from "./Pages"



function App() {
  const [posts, setPosts] = React.useState([])
  const [totalPages, setTotalPages] = React.useState(0)
  const [limit, setLimit] = React.useState(10)
  const [page, setPage] = React.useState(1)
  let pagesArray = getPagesArray(totalPages)

  const fetchPosts = async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  }


  React.useEffect(() => {
    fetchPosts()
  }, [page])

  const changePage = (page) => {
    setPage(page)
  }
  

  return (
    <div className="App">
      <div className="posts__list">
            {posts.map((post) => (
                <div key={post.id}>
                  <strong>{post.id}. {post.title}</strong>
                  <p>{post.body}</p>
                </div>
         ))}
      </div>
      <div className="pages__wrqpper">
        {pagesArray.map((p) => 
          <span
             key={p}
             onClick={() => changePage(p)}
             className={page === p ? "page page__current" : "page"}
          >
             {p}
          </span>
        )}
      </div>
    </div>
  );
}

export default App;
