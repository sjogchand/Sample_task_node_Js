import './index.css'
import Modal from 'react-modal'
import cross from '../../../assets/images/cross.png'
import arr from '../../../assets/images/arrow.png'
import { useState } from 'react'

export default function AmenitiesModal(props) {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal(state) {
    setIsOpen(state)
  }

  return (
    <div className="Moday_cont">
      <button onClick={() => toggleModal(true)}>View all amanities</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => toggleModal(false)}
        contentLabel="My dialog"
        className="mymodal_5"
        overlayClassName="myoverlay"
        closeTimeoutMS={400}
      >
        <div className="cross_image" onClick={() => setIsOpen(false)}>
          <img src={cross} alt="" />
        </div>
        <div className="amenities_cnt">
          <h3 className="amenities_heading">Top amenities</h3>
        </div>
        <div className="pd_about_sub">
          {props.ameneties.map((item, index) => (
            <div className="flex_wrap" key={index}>
              <span>
                <img src={arr} alt="" />
              </span>
              <span> {item}</span>
            </div>
          ))}
          {/* <div className='pd_about_sub_cnt'>
                        <div><span><img src={arr} alt="" /></span><span>Ski lift access</span></div>
                        <div><span><img src={arr} alt="" /></span><span>Biking trail access</span></div>
                    </div>
                    <div className='pd_about_sub_cnt'>
                        <div><span><img src={arr} alt="" /></span><span>Kid friendly</span></div>
                        <div><span><img src={arr} alt="" /></span><span>Owner storage</span></div>
                    </div>
                    <div className='pd_about_sub_cnt'>
                        <div><span><img src={arr} alt="" /></span><span>Pet friendly</span></div>
                        <div><span><img src={arr} alt="" /></span><span>Professionally decorated</span></div>
                    </div>
                    <div className='pd_about_sub_cnt'>
                        <div><span><img src={arr} alt="" /></span><span>Ski lift access</span></div>
                        <div><span><img src={arr} alt="" /></span><span>Biking trail access</span></div>
                    </div>
                    <div className='pd_about_sub_cnt'>
                        <div><span><img src={arr} alt="" /></span><span>Kid friendly</span></div>
                        <div><span><img src={arr} alt="" /></span><span>Owner storage</span></div>
                    </div>
                    <div className='pd_about_sub_cnt'>
                        <div><span><img src={arr} alt="" /></span><span>Pet friendly</span></div>
                        <div><span><img src={arr} alt="" /></span><span>Professionally decorated</span></div>
                    </div> */}
        </div>
      </Modal>
    </div>
  )
}
