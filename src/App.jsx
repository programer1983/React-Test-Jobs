import React, { useState } from 'react';
import './App.css';
import Acordion from './components/Accordion/Accordion';
import { data } from './data';

function App() {
    
    return (
        <div className="App">
            {data.map((dat) => 
                <Acordion 
                    key={dat.id} 
                    question={dat.question} 
                    answer={dat.answer}
                    id={dat.id}
                />
            )}
        </div>
    )
}

export default App;
