import React from 'react'
import styles from "./MyModal.module.css"

const MyModal = ({children, visible, setVisible}) => {
 
const rootClass = [styles.myModal]

if (visible){
    rootClass.push(styles.active)  
}

  return (
    <div className={rootClass.join(" ")} onClick={() => setVisible(false)}>
        <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
          {children}
        </div>
    </div>
  )
}

export default MyModal