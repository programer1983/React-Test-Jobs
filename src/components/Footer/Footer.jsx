import "./Footer.scss"
import footerLogo from "./../images/Footer/footer-logo.png"
import footerData from "./footer-data"
import {motion} from 'framer-motion'

const textAnimation = {
  hidden: {
      y: -100,
      opacity: 0
  },
  visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
  }
}

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial='hidden'
      whileInView= 'visible'
      viewport={{amount: 0.2, once: true}}
      style={{overflow: 'hidden'}}
    >
       <div className="container">
          <div className="footer__inner">
            <motion.a variants={textAnimation} href="#" className="footer__Logo">
              <img src={footerLogo} alt="" className="footer__logo-img" />
            </motion.a>
             <div className="footer__contacts">
                <p>Phone: +123 456 7890</p>
                <p>Email:  support@example.com</p>
             </div>
             <ul className="footer__social">
               {footerData.map((footdat) => 
                  <li className="footer__item" key={footdat.id}>
                    <a href="#">{footdat.icon}</a>
                  </li>
                )}
             </ul>
          </div>
       </div>
    </motion.footer>
  )
}

export default Footer
