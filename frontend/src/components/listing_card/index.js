import './index.css'
import img from '../../assets/images/card1.png'
import img2 from '../../assets/images/c1.png'
import img3 from '../../assets/images/c3.png'

import heart from '../../assets/images/heart.png'
// import heart_r from "../../assets/images/red_heart.png"
import pin from '../../assets/images/pd_pin.png'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function ListingCard({ city }) {
  const navigator = useNavigate()
  const [propertyList, setPropertyList] = useState([])
  const [propertyArr, setPropertyArr] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:1055/api/properties/list`).then((response) => {
      if (response.data.status === 200) {
        let data = response.data.data.map((item) => {
          return { ...item, configuration: JSON.parse(item.configuration) }
        })
        setPropertyList(
          data.filter((a) => a.city.toLowerCase() === city.toLowerCase()),
        )
        setPropertyArr(data)
      }
    })
  }, [])

  useEffect(() => {
    console.log('city', city)
    setPropertyList(
      propertyArr.filter((a) => a.city.toLowerCase() === city.toLowerCase()),
    )
  }, [city])

  const numberFormat = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value);

  return (
    <div className="card_wrapper_main">
      {propertyList.map((item, index) => (
        <div
          key={index}
          className="card_wrapper"
          onClick={() =>
            navigator(`/property-detail/?item_id=${item.id}`, { replace: true })
          }
        >
          <div className="heart_top">
            <img src={heart} alt="" />
          </div>
          <div className="property_image">
            <img
              src={`http://localhost:1055/${item.property_image}`}
              alt=""
              style={{ height: '250px', witdh: '100%' }}
            />
          </div>
          <div className="card_sub_wrapper">
            <div>
              <h3>{item.title}</h3>
              <p>
                <img src={pin} alt="" /> {item.address}
              </p>
            </div>
            <div className="card_btn_wrapper">
              {' '}
              <span className="buttonTopText">{numberFormat(item.price)}</span> <br />
              <span className="buttonBottomText">per share</span>{' '}
            </div>
          </div>
          <div className="card_content_">
            <div className="card_sub_content">
              <span>
                <img src={img2} alt="" />
              </span>
              <span>{item.configuration.main_house_bed} BD, {item.configuration.main_house_bath} BA</span>
            </div>
            {/* <div className="card_sub_content">
              <span>
                <img src={img2} alt="" />
              </span>
              <span>2 BD, 3 BA (ADU)</span>
            </div> */}
            <div className="card_sub_content">
              <span>
                <img src={img3} alt="" />
              </span>
              <span>1/4 ownership</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
