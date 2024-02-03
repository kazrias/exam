import React, { useEffect, useRef, useState } from 'react'
import './Modal.css'
export const Modal = ({ children }) => {
  const dialogRef = useRef(null)
  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);
  return (
    <div className='modal'>
      <dialog ref={dialogRef}>
        TEXT
      </dialog>
    </div >
  )
}
