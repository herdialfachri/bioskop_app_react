import React from 'react';

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>
  );
}

export default Modal;