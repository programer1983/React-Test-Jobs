import "./About.scss"
import aboutImg from "./../images/About/about-img.jpeg"
import { aboutData } from "./about-data"

const About = () => {
  return (
    <div className="about">
        <div className="container">
            <div className="about__inner">
                <img src={aboutImg} alt="" className="about__img" />
                <div className="about__content">
                    <h2 className="about__title">About Us</h2>
                    {aboutData.map(abdata => 
                         <p className="about__text" key={abdata.id}>{abdata.text}</p>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
