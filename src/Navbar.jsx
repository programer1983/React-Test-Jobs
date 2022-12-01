import React from 'react'
import {Link} from "react-router-dom"
import "./App.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar__links">
            <Link to="/about">About</Link>
            <Link to="/">Post</Link>
        </div>
    </div>
  )
}

export default Navbar