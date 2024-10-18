import "./Menu.css"

const Menu = ({header, items, active, setActive}) => {
  return (
    <div className={active ? "menu active" : "menu"} onClick={() => setActive(false)}>
        <div className="blur"></div>
        <div className="menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="menu-header">{header}</div>
            <ul>
                {items.map((item) => 
                    <li>
                        <a href={item.href}>{item.value}</a>
                        <span class="material-icons">{item.icon}</span>
                    </li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default Menu

