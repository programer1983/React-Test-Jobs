import "./Modal.css"

const Modal = ({active, setActive}) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <form className={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
             <input type="email" className="modal__input" placeholder="Email" />
             <input type="text" className="modal__input" placeholder="Name" />
             <input type="phone" className="modal__input" placeholder="Phone" />
             <button onClick={() => setActive(false)} type="submit" className="modal__button">Add User</button>
        </form>
    </div>
  )
}

export default Modal

