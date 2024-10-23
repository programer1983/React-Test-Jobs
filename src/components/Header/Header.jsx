import "./Header.scss"
import  {headerData} from "./header-data"
import headerLogo from "./../images/header-logo.png"
import {motion} from 'framer-motion'

const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="header__inner">
                <motion.a href="#" 
                    className="heade__logo"
                    whileHover={{
                        scale: 1.3,
                    }}
                >
                    <img src={headerLogo} alt="header-logo" className="header__logo-img"/>
                </motion.a>
                <nav className="nav">
                    <ul className="header__list">
                        {headerData.map(heddata => 
                        <li className="header__item" key={heddata.id}>
                            <a href={heddata.path} className="header__link">{heddata.name}</a>
                        </li>
                        )}
                    </ul>
                </nav>
                <button className="header__button button">Sign Up</button>
            </div>
        </div>
    </header>
  )
}

export default Header


