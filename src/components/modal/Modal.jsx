import React from 'react'
import './modal.css'
import { MdClose } from 'react-icons/md';

const Modal = ({children, setShowModal}) => {
  return (
    <div className="modalBackground">
      <div className="modalWrapper">
        <div className="modalContent">
          {children}
        </div>
        <MdClose className="closeModalBtn" onClick={() => setShowModal(false)}/>
      </div>
    </div>
  )
}

export default Modal
