import React from 'react'
const Modal = (props) => {
  const { children, modalId, modalLabel, className } = props

  return (
    <div
      className={`modal fade ${className}`}
      id={modalId}
      aria-hidden="true"
      aria-labelledby={modalLabel}
      // tabIndex="-1"
      data-bs-keyboard="false"
      data-bs-backdrop="static"
    >
      {children}
    </div>
  )
}

export default Modal
