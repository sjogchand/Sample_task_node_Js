import React, { useState } from 'react'
import './index.css'
// import { SliderData } from './sliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = ({ slides, sliderData }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className="slider list_page_slider_section">
      {/* <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /> */}
      <div className="listing_page_slider PropertyImageCarousel_index-indicator-mediahub__mlO8x navigation">
        <button
          aria-label="Previous Image"
          className="prev_button Button_button__2JA4L Button_icon-button__92EF8 Button_icon-button--white__1MAfl"
          data-id="Previous Image"
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            prevSlide()
          }}
        >
          <div className="Button___content__MtnK9">
            <svg
              className="Icon_icon__DqC9j Icon_icon--sm__4Ul0L Icon_icon--white__jpk-k Button_icon-button__icon__L8eZ-"
              data-id="ChevronWest"
              viewBox="0 0 11 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Previous Image</title>
              <path d="M10.4213 1.1762C10.4213 1.3662 10.3513 1.5562 10.2013 1.7062L1.57128 10.3362L1.50128 10.5162L1.57128 10.6962L10.2013 19.3362C10.4913 19.6262 10.4913 20.1062 10.2013 20.3962C9.91128 20.6862 9.43128 20.6862 9.14128 20.3962L0.511277 11.7562C0.341277 11.5962 0.221277 11.3962 0.131277 11.1862C-0.0387232 10.7662 -0.0487232 10.2762 0.131277 9.8462C0.221277 9.6362 0.341277 9.4462 0.511277 9.2762L9.14128 0.646196C9.43128 0.356196 9.91128 0.356196 10.2013 0.646196C10.3513 0.796196 10.4213 0.986196 10.4213 1.1762Z"></path>
            </svg>
          </div>
        </button>
        <button
          aria-label="Next Image"
          className="next_button Button_button__2JA4L Button_icon-button__92EF8 Button_icon-button--white__1MAfl"
          data-id="Next Image"
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            nextSlide()
          }}
          // onClick={nextSlide}
        >
          <div className="Button___content__MtnK9">
            <svg
              className="Icon_icon__DqC9j Icon_icon--sm__4Ul0L Icon_icon--white__jpk-k Button_icon-button__icon__L8eZ-"
              data-id="ChevronEast"
              viewBox="0 0 11 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Next Image</title>
              <path d="M0 19.4275C0 19.2375 0.0700003 19.0475 0.22 18.8975L8.85 10.2675L8.92 10.0875L8.85 9.90748L0.22 1.27748C-0.0699997 0.987485 -0.0699997 0.507485 0.22 0.217485C0.51 -0.0725152 0.99 -0.0725152 1.28 0.217485L9.91 8.85748C10.08 9.01748 10.2 9.21748 10.29 9.42748C10.46 9.84748 10.47 10.3375 10.29 10.7675C10.2 10.9775 10.08 11.1675 9.91 11.3375L1.28 19.9775C0.99 20.2675 0.51 20.2675 0.22 19.9775C0.0700003 19.8275 0 19.6375 0 19.4475V19.4275Z"></path>
            </svg>
          </div>
        </button>
      </div>
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img
                src={`http://localhost:1055/${slide}`}
                alt="travel image"
                style={{ height: '300px', witdh: '100%' }}
                className="listing_image_slide"
              />
            )}
          </div>
        )
      })}
    </section>
  )
}

export default ImageSlider
