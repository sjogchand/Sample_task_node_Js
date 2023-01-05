import './index.css'
import ReactPlayer from 'react-player'
import arr from '../../../../assets/images/arrow.png'
import video from '../../../../assets/images/cover_video.mp4'
import AmenitiesModal from '../../../all_modals/amenities_modal'
import { useEffect, useState, useRef } from 'react'
import Modal from 'react-modal'
import cross from '../../../../assets/images/cross.png'
import img from '../../../../assets/images/pd.png'

export default function AboutProperty({ propertyDetails }) {
  const [ameneties, setAmenities] = useState([])
  const vidRef = useRef(null)
  const modelRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal(state) {
    setIsOpen(state)
  }

  useEffect(() => {
    setAmenities(propertyDetails?.amenities?.split(','))
  }, [propertyDetails])

  const handlePlay = () => {
    const elem = vidRef.current
    if (elem) {
      //checking if ref was initiated
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen()
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen()
      }
    }
  }

  const handlePlay1 = () => {
    const elem = modelRef.current
    if (elem) {
      //checking if ref was initiated
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen()
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen()
      }
    }
  }

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
        <div className="cross_image" onClick={() => setIsOpen(false)}>
          <a class="absolute top-1/2 transform -translate-y-1/2 mt-1/8 ml-1 w-1-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16.719 16.566"
              class="mr-1/8 h-1-1/2 stroke-current text-white stroke-2"
            >
              <g fill="none">
                <path d="M15.719 8.283H1M7.869 1.415L1 8.283l6.869 6.869"></path>
              </g>
            </svg>
          </a>
        </div>

        <div class="h-navbar flex justify-center items-center">
          <h3 class="text-white">3D Virtual Tour</h3>
        </div>
        <iframe
          src={`https://my.matterport.com/show/?m=${propertyDetails?.iframe_url}&ts=0&hl=0&guides=0&lp=1&play=1`}
          frameborder="0"
          allowfullscreen=""
          allow="xr-spatial-tracking"
          width="100%"
          height="89.5%"
        ></iframe>
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
          <div className="3d_modal">
            <div class="3d_modal_div">
              Virtual Tour
              <button
                class="Button_button-accent-text-hover__CzS4b button1"
                // onClick={handlePlay1}
                onClick={() => toggleModal(true)}
              >
                Launch
              </button>
            </div>
            <iframe
              // ref={modelRef}
              src={`https://my.matterport.com/show/?m=${propertyDetails?.iframe_url}&ts=0&hl=0&guides=0&lp=1&play=1`}
              frameborder="0"
              allowfullscreen=""
              allow="xr-spatial-tracking"
              style={{ width: '400px', paddingRight: '20px', heigth: '300px' }}
              width="400"
              height="220"
            ></iframe>
          </div>
          <div className="video">
            <div class="video_div">
              Property Video
              <button
                class="Button_button-accent-text-hover__CzS4b button2"
                onClick={handlePlay}
              >
                Play
              </button>
            </div>
            <video
              ref={vidRef}
              playsInline
              controls={true}
              autoPlay={false}
              style={{
                width: '385px',
                paddingLeft: '20px',
                height: '220px',
              }}
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  )
}
