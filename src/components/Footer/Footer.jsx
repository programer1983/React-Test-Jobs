import "./Footer.scss"
import footerLogo from "./../images/Footer/footer-logo.png"
import footerData from "./footer-data"

const Footer = () => {
  return (
    <footer className="footer">
       <div className="container">
          <div className="footer__inner">
            <a href="#" className="footer__Logo">
              <img src={footerLogo} alt="" className="footer__logo-img" />
            </a>
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
    </footer>
  )
}

export default Footer
