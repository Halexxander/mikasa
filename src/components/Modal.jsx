import React from 'react';
 import './Modal.css';
 import Search from '../Pages/Search';

function Modal({ isOpen, handleClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <Search/>
    </div>
  );
}

export default Modal;
