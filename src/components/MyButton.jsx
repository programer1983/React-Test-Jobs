import React from 'react'

const MyButton = ({children, ...props}) => {
  return (
    <button {...props} className='my__button'>
        {children}
    </button>
  )
} 

export default MyButton