import "./Hero.scss"
import {motion} from 'framer-motion'

const Hero = () => {
  // const pVariants = {
  //   hidden: {
  //     x: -1000,
  //     opacity: 0
  //   },
  //   visible: {
  //     x: 0,
  //     opacity: 1
  //   }
  // }

  return (
    <div className="hero">
        <div className="container">
            <div className="hero__inner">
                <h1 className="hero__title">Welcome to travel with our agency</h1>
                <motion.p 
                  className="hero__text"
                  initial={{
                     x: -1000,
                     opacity: 0
                  }}
                  animate={{
                    x: 0,
                    opacity: 1
                  }}
                  // initial={'hidden'}
                  // animate={'visible'}
                  transition={{
                    delay: 0.5,
                    ease: 'easeInOut'
                  }}
                  // variants={pVariants}
                >
                  Unforgettable travel to twenty-five exotic countries, with the highest level of comfort and convenience
                </motion.p>
                <motion.a 
                  href="#" 
                  className="hero__button button" 
                  animate={{rotate: 360}}
                  transition={{
                    delay: 3,
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: 1,
                    repeatType: 'reverse',
                    type: 'tween',
                    ease: 'easeInOut'
                  }}
                >
                  Start now
                </motion.a>
            </div>
        </div>
      
    </div>
  )
}

export default Hero

