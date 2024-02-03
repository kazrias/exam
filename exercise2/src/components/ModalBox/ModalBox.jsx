import { useEffect, useRef } from 'react'
import './ModalBox.css'
import { useSelector } from 'react-redux'
export const ModalBox = ({ children }) => {
  const showClick = useSelector(state => state.app.shwowClick)

  return (
    <div className="modal">
      <div className="wrapper">
        a
      </div>
    </div>
  )
}
