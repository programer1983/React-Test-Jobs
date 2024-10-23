import "./Travels.scss"
import travelsData from "./travels-data"
import {motion} from 'framer-motion'
import {forwardRef} from 'react'

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

const featureAnimation = {
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

const Travels = () => {
  return (
    <motion.div 
      className="travels"
      initial='hidden'
      whileInView= 'visible'
      viewport={{amount: 0.2}}
    >
    <div className="container">
    <motion.h2 variants={textAnimation} className="travels__title">Our travels</motion.h2>
        <motion.div 
          className="travels__inner"
          initial='hidden'
          whileInView= 'visible'
          viewport={{amount: 0.2}}
        >
        {travelsData.map((travdata, index) => 
            <MFeatureItem
                variants={featureAnimation}
                custom={index + 1} 
                key={travdata.id} 
                {...travdata}
            />
        )}
        </motion.div>
    </div>
    </motion.div>
  )
}

export default Travels

const FeatureItem = forwardRef(({img, title, text}, ref) => (
    <div className="travels__item" ref={ref}>
        <a href="#" className="travels__link">
        <img src={img} alt="" className="travels__item-img" />
        <h2 className="travels__item-title">{title}</h2>
        <p className="travels__item-text">{text}</p>
        </a>
    </div> 
))

const MFeatureItem = motion(FeatureItem)
