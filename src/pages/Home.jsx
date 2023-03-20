import React from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"

function Home({posts}) {
    const navigate = useNavigate()
   
    return (
        <div className="home">
        <ul className='posts__list'>
           <h1>Posts List</h1>
           <Link to="/addpost"><button>Add Post</button></Link>
           {posts.map((post, index) => (
            <li key={post.id} className="posts__item">
                <h2>{index + 1}. {post.first_name}</h2>
                <p>{post.last_name}</p>
                <button onClick={() => navigate(`/update/${post.id}`)}>Update Post</button>
            </li>
           ))}
        </ul>
    </div>
    )
}

export default Home;