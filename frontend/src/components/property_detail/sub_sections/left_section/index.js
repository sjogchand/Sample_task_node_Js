import './index.css'
import ReactPlayer from 'react-player'
import arr from '../../../../assets/images/arrow.png'
import video from '../../../../assets/images/cover_video.mp4'
import AmenitiesModal from '../../../all_modals/amenities_modal'
import { useEffect, useState } from 'react'

export default function AboutProperty({ propertyDetails }) {
  const [ameneties, setAmenities] = useState([])

  useEffect(() => {
    setAmenities(propertyDetails?.amenities?.split(','))
  }, [propertyDetails])

  return (
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
          // <div className="pd_about_sub_cnt" key={index}>
            <div className='flex_wrap' key={index}>
              <span>
                <img src={arr} alt="" />
              </span>
              <span> {item}</span>
            </div>
          // </div>
        ))}
        {/* <div className="pd_about_sub_cnt">
          <div>
            <span>
              <img src={arr} alt="" />
            </span>
            <span>Ski lift access</span>
          </div>
          <div>
            <span>
              <img src={arr} alt="" />
            </span>
            <span>Biking trail access</span>
          </div>
        </div>
        <div className="pd_about_sub_cnt">
          <div>
            <span>
              <img src={arr} alt="" />
            </span>
            <span>Kid friendly</span>
          </div>
          <div>
            <span>
              <img src={arr} alt="" />
            </span>
            <span>Owner storage</span>
          </div>
        </div>
        <div className="pd_about_sub_cnt">
          <div>
            <span>
              <img src={arr} alt="" />
            </span>
            <span>Pet friendly</span>
          </div>
          <div>
            <span>
              <img src={arr} alt="" />
            </span>
            <span>Professionally decorated</span>
          </div>
        </div> */}
      </div>
      <div className="about_pd_button">
        {/* <button>View all amanities</button> */}
        <AmenitiesModal ameneties={propertyDetails?.amenities?.split(',')} />
      </div>
      <div className="tour_heading">
        <h1>Virtual 3D tour</h1>
      </div>
      <div className="pd_video">
        <video playsInline controls={true} autoPlay={false}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
