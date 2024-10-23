import "./Hero.scss"
import {motion} from 'framer-motion'

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {delay: custom * 0.2, duration: 0.6}
  })
}

const Hero = () => {

  return (
    <div className="hero">
        <div className="container">
            <motion.div 
              className="hero__inner"
              initial='hidden'
              whileInView='visible'
              viewport={{once: true}}
            >
              <motion.h1 custom={1} variants={textAnimation} className="hero__title">Welcome to travel with our agency</motion.h1>
              <motion.p  custom={3}  variants={textAnimation} className="hero__text">Unforgettable travel to twenty-five exotic countries, with the highest level of comfort and convenience</motion.p>
              <motion.a  custom={5}  variants={textAnimation} href="#" className="hero__button button" >Start now</motion.a>
            </motion.div>
        </div>
      
    </div>
  )
}

export default Hero

