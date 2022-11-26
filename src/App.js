import React from "react"
import './App.css'
import { data } from "./data"
import Loader from "./Loader";

function App() {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);


  return (
    <div className="App">
      <div className="posts__list">
         {!loaded 
            ? <Loader /> 
            : data.map((item, index) => (
                <div key={item.id}>
                  <strong>{index + 1}. {item.title}</strong>
                  <p>{item.body}</p>
                </div>
         ))}
      </div> 
    </div>
  );
}

export default App;
