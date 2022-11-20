import React from "react"
import './App.css';

function App() {
  const inputRef = React.useRef()


  const addNewText = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)

  }


  return (
    <div className="App">
      <input
          ref={inputRef}
          type="text" 
          placeholder="Enter text" 
        />
       <div>
         <button onClick={addNewText}>Add Text</button>
      </div>
    </div>
  );
}

export default App;
