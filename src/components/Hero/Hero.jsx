import "./Hero.scss"
import heroBg from "./../images/Hero/hero-bg.jpg"


const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
            <div className="hero__inner">
                <h1 className="hero__title">Welcome to travel with our agency</h1>
                <p className="hero__text">Unforgettable travel to twenty-five exotic countries, with the highest level of comfort and convenience</p>
                 <a href="#" className="hero__button button">Start now</a>
            </div>
        </div>
      
    </div>
  )
}

export default Hero

