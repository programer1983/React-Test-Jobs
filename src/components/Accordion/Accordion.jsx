import { useState } from "react"
import "./Accordion.css"

const Acordion = ({id, question, answer}) => {
  const [isVisible, setIsVisible] = useState(false)
  
  const toggleAccordion = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className="accordion" onClick={toggleAccordion}>
      <div className="item">
          <p className="number">{id}</p>
          <p className="text">{question}</p>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            stroke-width="1.5" stroke="currentColor" 
            class={`icon ${isVisible ? "rotate" : ""}`}
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" 
          />
        </svg>
      <div className={`hidden-box ${isVisible ? "active-box" : ""}`}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default Acordion

