import React from "react"
import './App.css';
import MyButton from "./components/MyButton";
import MyInput from "./components/MyInput";

function App() {


  return (
    <div className="App">
        <MyInput type="rexr" placeholder="Enter your text" />
        <MyButton>Add New Post</MyButton>
    </div>
  );
}

export default App;
