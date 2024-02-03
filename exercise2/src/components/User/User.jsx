import React from 'react'
import './User.css'
export const User = ({ userName, email }) => {
  return (
    <div className='user'>
      <p>{userName}</p>
      <p>{email}</p>
    </div>
  )
}
