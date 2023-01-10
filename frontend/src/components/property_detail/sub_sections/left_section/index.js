import './index.css'
import ReactPlayer from 'react-player'
import arr from '../../../../assets/images/arrow.png'
import video from '../../../../assets/images/cover_video.mp4'
import AmenitiesModal from '../../../all_modals/amenities_modal'
import { useEffect, useState, useRef } from 'react'
import Modal from 'react-modal'
import cross from '../../../../assets/images/cross.png'
import img from '../../../../assets/images/pd.png'
import ModalTab from './iframe_modal'

export default function AboutProperty({
  propertyDetails,
  sliderData,
  isOpenModal,
  setIsOpenModal,
  tabVal,
}) {
  const [ameneties, setAmenities] = useState([])
  const vidRef = useRef(null)
  const [isOpen, setIsOpen] = useState(isOpenModal)
  const [tabValue, setTabValue] = useState('')

  function toggleModal(state) {
    if (state === false) setIsOpenModal(state)
    setIsOpen(state)
  }

  useEffect(() => {
    if (isOpenModal === true) toggleModal(isOpenModal)
    setTabValue(tabVal)
  }, [isOpenModal])

  useEffect(() => {
    setAmenities(propertyDetails?.amenities?.split(','))
  }, [propertyDetails])

  return (
    <>
      {' '}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => toggleModal(false)}
        contentLabel="My dialog"
        className="mymodal_2 iframe_modal"
        overlayClassName="myoverlay"
        closeTimeoutMS={400}
      >
        <ModalTab
          propertyDetails={propertyDetails}
          sliderData={sliderData}
          setIsOpen={setIsOpen}
          tabValue={tabValue}
        />
      </Modal>
      <div className="pd_about_container">
        <div className="pd_about_content">
          <h1>About this property</h1>
          <p>{propertyDetails.description} </p>
        </div>
        <div className="sub_about_heading">
          <h3>Top amenities</h3>
        </div>
        <div className="pd_about_sub">
          {ameneties.map((item, index) => (
            <div className="flex_wrap" key={index}>
              <span>
                <img src={arr} alt="" />
              </span>
              <span> {item}</span>
            </div>
          ))}
        </div>
        <div className="about_pd_button">
          <AmenitiesModal ameneties={propertyDetails?.amenities?.split(',')} />
        </div>
        <div className="tour_heading">
          <h1>Virtual 3D tour</h1>
        </div>
        <div className="details_page_video pd_video">
          <div className="iframe_modal">
            <div className="iframe_modal_div">
              Virtual Tour
              <button
                className="Button_button-accent-text-hover__CzS4b button1"
                // onClick={handlePlay1}
                onClick={() => {
                  toggleModal(true)
                  setTabValue(2)
                }}
              >
                Launch
              </button>
            </div>
            <iframe
              // ref={modelRef}
              // src={
              //   'https://my.matterport.com/show/?m=qUe81UayJNj&ts=0&hl=0&guides=0&lp=1&play=1'
              // }
              src={`https://my.matterport.com/show/?m=${propertyDetails?.iframe_url}&ts=0&hl=0&guides=0&lp=1&play=1`}
              allowFullScreen=""
              width="370"
              height="220"
            ></iframe>
          </div>
          <div className="video">
            <div className="video_div">
              Property Video
              <button
                className="Button_button-accent-text-hover__CzS4b button2"
                onClick={() => {
                  toggleModal(true)
                  setTabValue(1)
                }}
              >
                Play
              </button>
            </div>
            {/* {console.log(propertyDetails.video_url,"props.propertyDetails.video_url")} */}
            <iframe
              src={
                propertyDetails.video_url !== null
                  ? `http://localhost:1055/${propertyDetails.video_url}`
                  : video
              }
              style={{
                width: '385px',
                height: '220px',
              }}
              allowFullScreen={true}
              // allow="autoplay"
            ></iframe>
            {/* <video
              ref={vidRef}
              playsInline
              controls={true}
              autoPlay={false}
              style={{
                width: '385px',
                height: '220px',
              }}
            >
              <source
                // src={video}
                src={
                  propertyDetails.video_url !== null
                    ? `http://localhost:1055/${propertyDetails.video_url}`
                    : video
                }
                type="video/mp4"
                controls
                autoPlay
                muted
              />
            </video> */}
          </div>
        </div>
      </div>
    </>
  )
}
