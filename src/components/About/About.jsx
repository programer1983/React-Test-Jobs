import "./About.scss"
import aboutImg from "./../images/About/about-img.jpeg"
import { aboutData } from "./about-data"
import {motion} from 'framer-motion'

const textAnimation = {
  hidden: {
      y: 100,
      opacity: 0
  },
  visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {delay: custom * 0.2, duration: 0.5}
  })
}

const About = () => {
  return (
    <motion.div 
     className="about"
     initial='hidden'
     whileInView= 'visible'
     viewport={{amount: 0.2, once: true}}
    >
      <div className="container">
          <div className="about__inner">
              <motion.img custom={1} variants={textAnimation} src={aboutImg} alt="" className="about__img" />
              <motion.div custom={2} variants={textAnimation} className="about__content">
                  <h2 className="about__title">About Us</h2>
                  {aboutData.map(abdata => 
                        <p className="about__text" key={abdata.id}>{abdata.text}</p>
                  )}
              </motion.div>
          </div>
      </div>
    </motion.div>
  )
}

export default About
