import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Travels from './components/Travels/Travels';
import Footer from './components/Footer/Footer';


function App() {
    
    return (
        <div className="App">
           <Header />
           <main>
              <Hero />
              <About />
              <Travels />
           </main>
           <Footer />
        </div>
    )
}

export default App;
