import './index.css'
import img from '../../assets/images/property_detail.png'
import img1 from '../../assets/images/pd_2.png'
import img2 from '../../assets/images/pd_1.png'
import img3 from '../../assets/images/pd_share.png'
import img4 from '../../assets/images/pd_heart.png'
import img0 from '../../assets/images/pd_pin.png'
import img6 from '../../assets/images/pd_area.png'
import img7 from '../../assets/images/pd_config.png'
import img8 from '../../assets/images/pd_year.png'
import img9 from '../../assets/images/pd_security.png'
import img10 from '../../assets/images/pd_kid.png'
import img11 from '../../assets/images/pd_parking.png'

import AboutProperty from './sub_sections/left_section'
import RightPd from './sub_sections/right_section'
import { useEffect, useState } from 'react'
import axios from 'axios'

// import Theme_Buttom from "../general_components/button"

var data = [
  {
    img: img6,
    head: `Property Area`,
    text: [
      'Area of property: 6500 sq.ft.',
      'Area of Main home: 1500 sq.ft.',
      'Area of ADU: 1200 sq.ft.',
    ],
  },
  {
    img: img7,
    head: `Configuration`,
    text: ['Main House - 4 Beds, 5 Baths', 'ADU - 2 Beds, 2 Baths.'],
  },
  {
    img: img8,
    head: `Year Built`,
    text: [`2015`],
  },
  {
    img: img9,
    head: `Security`,
    text: [`24 hours surveillance`],
  },
  {
    img: img10,
    head: `Kid Safe`,
    text: [`Fully safe environment`],
  },
  {
    img: img11,
    head: `Parking`,
    text: [`4 Parking Spaces`],
  },
]

export default function Property_Details() {
  const queryParams = new URLSearchParams(window.location.search)
  const item_id = queryParams.get('item_id')
  const [ownerShipProps, setOwnerShipProps] = useState('')
  const [ownerShipPropsPrice, setOwnerShipPrice] = useState('')

  const [propertyDetails, setPropertyDetails] = useState({
    title: '',
    price: '',
    wholePrice: '',
    newEstimatedValue: '',
    configuration: {
      main_house_bed: '',
      main_house_bath: '',
      adu_bed: '',
      adu_bath: '',
    },
    area: {
      area_of_property: '',
      area_of_main_home: '',
      area_of_ADU: '',
    },
    kid_Safe: '',
    parking: '',
    top_amenities: '',
    amenities: '',
    description: '',
    security: '',
    address: '',
    city: '',
    country: '',
  })

  useEffect(() => {
    axios
      .get(`http://localhost:1055/api/properties/${item_id}`)
      .then((response) => {
        if (response.data.status === 200) {
          let details = response.data.data
          details = {
            ...details,
            configuration: JSON.parse(details.configuration),
            area: JSON.parse(details.area),
          }

          let pricePerSq = details.price / parseInt(details.area.area_of_property)
          let aduPrice = 1200 * 350
          let newSize = 1200 + parseInt(details.area.area_of_property)
          let newEstimatedValue = Math.ceil(newSize * pricePerSq)
          let mhServicesFee = Math.ceil((newEstimatedValue / 100) * 10)

          details = {
            ...details,
            wholePrice:
              mhServicesFee + aduPrice + parseInt(response.data.data.price),
            newEstimatedValue: newEstimatedValue,
          }

          setPropertyDetails(details)

          for (let index = 0; index < data.length; index++) {
            if (data[index]['head'] === 'Property Area')
              data[index]['text'] = [
                `Area of property: ${details.area.area_of_property} sq.ft.`,
                `Area of Main home: ${details.area.area_of_main_home} sq.ft.`,
                `Area of ADU: ${details.area.area_of_ADU} sq.ft.`,
              ]
            else if (data[index]['head'] === 'Configuration')
              data[index]['text'] = [
                `Main House - ${details.configuration.main_house_bed} Beds, ${details.configuration.main_house_bath} Baths`,
                `ADU - ${details.configuration.adu_bed} Beds, ${details.configuration.adu_bath} Baths.`,
              ]
            else if (data[index]['head'] === 'Year Built')
              data[index]['text'] = [
                details.year_built
                  ? new Date(details.year_built).getUTCFullYear()
                  : '2015',
              ]
            else if (data[index]['head'] === 'Security')
              data[index]['text'] = [details.security]
            else if (data[index]['head'] === 'Kid Safe')
              data[index]['text'] = [details.kid_safe]
            else if (data[index]['head'] === 'Parking')
              data[index]['text'] = [details.parking]
          }
        }
      })
  }, [])

  const numberFormat = (value) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value)

  return (
    <div className="property_details_container">
      <div className="pd_image_container">
        {propertyDetails.property_image && (
          <img
            src={`http://localhost:1055/${propertyDetails.property_image}`}
            style={{ width: '100%' }}
            alt=""
          />
        )}
      </div>
      <div className="property_details_wrapper">
        <div className="top_row_wrapper">
          <div className="main_property_name_heading">
            <h1>{propertyDetails.title}</h1>
            <div>
              <img src={img0} alt="" />
              <h3>{propertyDetails.address}</h3>
            </div>
          </div>

          <div className="top_row_card top_row_card_1">
            <h3>Whole Property Price</h3>
            <h2>{numberFormat(propertyDetails.wholePrice)}</h2>
          </div>

          <div className="top_row_card">
            <h3>Configuration</h3>
            <h2>
              {propertyDetails.configuration.main_house_bed}{' '}
              <img src={img2} alt="" />{' '}
              {propertyDetails.configuration.main_house_bath}
              <img src={img1} alt="" />
            </h2>
            <h2>
              {propertyDetails.configuration.adu_bed}
              {propertyDetails.configuration.adu_bed && (
                <img src={img2} alt="" />
              )}
              {propertyDetails.configuration.adu_bath}
              {propertyDetails.configuration.adu_bath && (
                <img src={img1} alt="" />
              )}
            </h2>
          </div>

          <div className="top_row_card">
            <h3>{propertyDetails.area.area_of_property} sq.ft.</h3>
            <h2>{propertyDetails.area.area_of_property} sq.ft.</h2>
          </div>

          <div className="top_row_card with_button">
            <button>{numberFormat(ownerShipPropsPrice)}</button>
            <h3>1/{parseInt(ownerShipProps)} Ownership</h3>
          </div>

          <div className="top_row_card icons_pd">
            <span>
              <img src={img4} alt="" />
            </span>
            <span>
              <img src={img3} alt="" />
            </span>
          </div>
        </div>

        <div className="overview_section_wrapper">
          <div className="second_row_overview">
            <div className="overview_heading">
              <h1>Overview</h1>
              <h3>{propertyDetails.title} Overview</h3>
            </div>
            <div className="details_container">
              <div className="details_sub_child">
                {data.map((v, i) => {
                  return (
                    <div className="overview_list_item" key={i}>
                      <div>
                        <img src={v.img} alt="" />
                      </div>
                      <div className="overview_list_content">
                        <h3 key={i}>{v.head}</h3>
                        {v.text.map((m, n) => {
                          return <h4 key={n}>{m}</h4>
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
              <AboutProperty propertyDetails={propertyDetails} />
            </div>
          </div>
          <div className="pd_right_columns">
            <RightPd
              price={propertyDetails.wholePrice}
              propertyDetails={propertyDetails}
              setOwnerShipPrice={setOwnerShipPrice}
              setOwnerShipProps={setOwnerShipProps}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
