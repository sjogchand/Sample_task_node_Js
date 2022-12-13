import './index.css'
import Modal from 'react-modal'
import { useState } from 'react'
import { useEffect } from 'react'
import img from '../../../assets/images/modal_check.png'
import { HashLink } from 'react-router-hash-link'

export default function SpecialModal() {
  const [isOpen, setIsOpen] = useState(true)

  function toggleModal(state) {
    setIsOpen(state)
  }

  return (
    <div className="Moday_cont">
      {/* <button onClick={() => toggleModal(true)}>Submit</button> */}

      <Modal
        isOpen={isOpen}
        onRequestClose={() => toggleModal(false)}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={400}
      >
        <div className="green_check_wrapper">
          <img src={img} alt="" />
        </div>
        <h3 className="modal_heading"> Awesome! </h3>
        <p className="modal_para">
          We have received your request and our team will contact you within 48
          hours.
        </p>
        <HashLink
          smooth
          className="modal_btn"
          onClick={(e) => {
            setIsOpen(false)
          }}
          to="/add-property"
        >
          OK
        </HashLink>
      </Modal>
    </div>
  )
}
