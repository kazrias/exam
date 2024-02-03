import React from 'react'
import './Button.css'
export const Button = ({ children, type, onClick }) => {
  return (
    <button onClick={onClick} className={`button ${type}`}>
      {children}
    </button>
  )
}
