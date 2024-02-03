import React from 'react'
import './Button.css'
export const Button = ({ children, type }) => {
  return (
    <button className={`button ${type}`}>
      {children}
    </button>
  )
}
