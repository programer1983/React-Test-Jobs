import React from "react"
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./Navbar";
import Posts from "./Posts";
import About from "./About";
import Error from "./Error";
import PostPage from "./PostPage";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
         <Routes>
            <Route path="/" element={<Posts/>} />
            <Route path="/posts/:id" element={<PostPage/>} />
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<Error/>} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
