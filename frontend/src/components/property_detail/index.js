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
import MapContainer from './sub_sections/map_section'
import ImageSlider from '../slider'

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
  const [sliderData, setSliderData] = useState([])

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

  function isJsonString(str) {
    try {
      JSON.parse(str)
    } catch (e) {
      return false
    }
    return true
  }

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
            property_image: isJsonString(details.property_image)
              ? JSON.parse(details.property_image)
              : [details.property_image],
          }

          setSliderData(details.property_image)

          let pricePerSq =
            response?.data?.data?.price /
            parseInt(details.area.area_of_main_home)

          let aduPrice = 1200 * 350
          let newSize = 1200 + parseInt(details.area.area_of_main_home)
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
        <div className="image">
          {propertyDetails.property_image && (
            <div className="parent_div_top">
              {/* <img
                src={`http://localhost:1055/${propertyDetails.property_image}`}
                style={{ width: '100%', height: '68vh' }}
                alt=""
              /> */}
              <ImageSlider slides={sliderData} sliderData={sliderData} />
              <div className="banner">
                <ul className="flex items-center flex-1 whitespace-no-wrap overflow-x-auto w-full h-full lg:flex-row lg:w-auto lg:overflow-hidden lg:justify-center MediaHub_tabList__DDi_r">
                  <li className="MediaHub_firstTabItem__v8gIr">
                    <button
                      aria-label="Photos"
                      className="Button_button__2JA4L Button_icon-button__92EF8 Button_icon-button--white__1MAfl Button_icon-button--with-label__ed16x Button_icon-button--is-active-top__Vz1Wh ml-3/4 sm:mx-auto sm:mt-3/4 lg:my-auto lg:py-1/4 MediaHub_tabButton__1FiQG"
                      data-id="Photos"
                      type="button"
                    >
                      <div className="Button___content__MtnK9">
                        <svg
                          className="Icon_icon__DqC9j Icon_icon--sm__4Ul0L Icon_icon--white__jpk-k Button_icon-button__icon__L8eZ-"
                          data-id="Camera"
                          viewBox="0 0 16 14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title></title>
                          <path d="M2.42063 13.6066C1.45353 13.6066 0.666504 12.8203 0.666504 11.8541V4.50447C0.666504 3.53829 1.45353 2.75202 2.42063 2.75202H3.96133L5.06184 0.559778C5.14854 0.386531 5.32862 0.273254 5.52204 0.273254H10.4776C10.6711 0.273254 10.8511 0.379868 10.9378 0.559778L12.0383 2.75202H13.579C14.5461 2.75202 15.3332 3.53829 15.3332 4.50447V11.8541C15.3332 12.8203 14.5461 13.6066 13.579 13.6066H2.42063ZM2.42063 3.77817C2.02045 3.77817 1.69364 4.10467 1.69364 4.50447V11.8541C1.69364 12.2539 2.02045 12.5804 2.42063 12.5804H13.5724C13.9726 12.5804 14.2994 12.2539 14.2994 11.8541V4.50447C14.2994 4.10467 13.9726 3.77817 13.5724 3.77817H11.7115C11.5181 3.77817 11.338 3.67156 11.2513 3.49165L10.1508 1.29941H5.82885L4.72835 3.49165C4.64164 3.66489 4.46156 3.77817 4.26814 3.77817H2.42063Z"></path>
                          <path d="M7.9965 10.8879C6.15567 10.8879 4.66165 9.39536 4.66165 7.55628C4.66165 5.7172 6.15567 4.22461 7.9965 4.22461C9.83734 4.22461 11.3314 5.7172 11.3314 7.55628C11.3314 9.39536 9.83734 10.8879 7.9965 10.8879ZM7.9965 5.36404C6.78929 5.36404 5.80217 6.34355 5.80217 7.55628C5.80217 8.76901 6.78262 9.74852 7.9965 9.74852C9.21039 9.74852 10.1908 8.76901 10.1908 7.55628C10.1908 6.34355 9.21039 5.36404 7.9965 5.36404Z"></path>
                        </svg>
                        <span className="text-white whitespace-no-wrap type-body-sm sm:type-body Button_button__label__vnXgq Button_icon-button__label__HdHBw">
                          Photos
                        </span>
                      </div>
                    </button>
                  </li>
                  <li className="MediaHub_tabItem__8GiE4">
                    <button
                      aria-label="Videos"
                      className="Button_button__2JA4L Button_icon-button__92EF8 Button_icon-button--white__1MAfl Button_icon-button--with-label__ed16x ml-3/4 sm:mx-auto sm:mt-3/4 lg:my-auto lg:py-1/4 MediaHub_tabButton__1FiQG"
                      data-id="Videos"
                      type="button"
                    >
                      <div className="Button___content__MtnK9">
                        <svg
                          className="Icon_icon__DqC9j Icon_icon--sm__4Ul0L Icon_icon--white__jpk-k Button_icon-button__icon__L8eZ-"
                          data-id="Play"
                          fill="none"
                          viewBox="0 0 14 14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title></title>
                          <path d="M1.82916 13.645C1.01886 13.645 0.361328 13.0207 0.361328 12.2503V1.74963C0.361328 1.52381 0.421104 1.29135 0.534014 1.0921C0.719983 0.766651 1.0255 0.527548 1.40408 0.414638C1.78266 0.308369 2.17453 0.34822 2.5199 0.520906L12.8678 5.7679C13.1268 5.90073 13.3327 6.09334 13.4655 6.33909C13.8507 7.01655 13.5784 7.86005 12.8678 8.22535L2.5199 13.4723C2.30736 13.5786 2.06826 13.6384 1.82252 13.6384L1.82916 13.645ZM1.82916 1.34448C1.6764 1.34448 1.52364 1.42419 1.45058 1.55702C1.41737 1.6168 1.39744 1.68321 1.39744 1.74963V12.2503C1.39744 12.5425 1.7561 12.7484 2.03505 12.6089L12.3763 7.36192C12.5888 7.25565 12.6685 7.0099 12.5556 6.81065C12.5157 6.73759 12.456 6.68446 12.3763 6.64461L2.03505 1.39098C1.96863 1.35777 1.90222 1.34448 1.82916 1.34448Z"></path>
                        </svg>
                        <span className="text-white whitespace-no-wrap type-body-sm sm:type-body Button_button__label__vnXgq Button_icon-button__label__HdHBw">
                          Videos
                        </span>
                      </div>
                    </button>
                  </li>
                  <li className="MediaHub_lastTabItem__w8yYr">
                    <button
                      aria-label="3D Tour"
                      className="Button_button__2JA4L Button_icon-button__92EF8 Button_icon-button--white__1MAfl Button_icon-button--with-label__ed16x ml-3/4 sm:mx-auto sm:mt-3/4 lg:my-auto lg:py-1/4 MediaHub_tabButton__1FiQG"
                      data-id="3D Tour"
                      type="button"
                    >
                      <div className="Button___content__MtnK9">
                        <svg
                          className="Icon_icon__DqC9j Icon_icon--sm__4Ul0L Icon_icon--white__jpk-k Button_icon-button__icon__L8eZ-"
                          data-id="ThreeSixty"
                          viewBox="0 0 16 14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title></title>
                          <path d="M3.39644 5.09337C3.03644 5.09337 2.71644 5.03337 2.43644 4.9067C2.15644 4.78003 1.93644 4.6067 1.76977 4.39337C1.60977 4.17337 1.52311 3.92003 1.51644 3.63337H2.56977C2.56977 3.75337 2.61644 3.86003 2.68977 3.95337C2.76311 4.0467 2.86311 4.11337 2.98311 4.1667C3.10311 4.21337 3.24311 4.24003 3.39644 4.24003C3.55644 4.24003 3.69644 4.21337 3.81644 4.15337C3.93644 4.10003 4.03644 4.02003 4.10311 3.92003C4.16977 3.82003 4.20311 3.7067 4.20311 3.57337C4.20311 3.44003 4.16977 3.3267 4.09644 3.22003C4.02311 3.11337 3.91644 3.04003 3.78311 2.98003C3.64311 2.92003 3.48311 2.89337 3.29644 2.89337H2.83644V2.1267H3.29644C3.45644 2.1267 3.59644 2.10003 3.71644 2.0467C3.83644 1.99337 3.92977 1.91337 4.00311 1.82003C4.06977 1.72003 4.10311 1.6067 4.10311 1.48003C4.10311 1.35337 4.07644 1.2467 4.01644 1.15337C3.95644 1.06003 3.87644 0.9867 3.76977 0.933367C3.66311 0.880033 3.54311 0.853367 3.40311 0.853367C3.26311 0.853367 3.12977 0.880033 3.01644 0.9267C2.89644 0.980034 2.80311 1.0467 2.73644 1.14003C2.66311 1.23337 2.62977 1.34003 2.62311 1.4667H1.62311C1.62311 1.18003 1.70977 0.933367 1.86977 0.713367C2.02977 0.493367 2.24311 0.3267 2.50977 0.200033C2.77644 0.0800333 3.08311 0.0133667 3.42311 0.0133667C3.76311 0.0133667 4.06311 0.0733667 4.31644 0.200033C4.56977 0.3267 4.76977 0.493367 4.91644 0.700033C5.05644 0.913367 5.12977 1.1467 5.12977 1.4067C5.12977 1.6867 5.04311 1.91337 4.86977 2.10003C4.69644 2.2867 4.46977 2.40003 4.19644 2.45337V2.49337C4.55644 2.54003 4.83644 2.6667 5.02977 2.87337C5.22311 3.08003 5.31644 3.33337 5.31644 3.64003C5.31644 3.92003 5.23644 4.17337 5.06977 4.39337C4.90977 4.61337 4.68311 4.7867 4.39644 4.91337C4.10977 5.04003 3.78311 5.10003 3.40977 5.10003L3.39644 5.09337Z"></path>
                          <path d="M7.94977 5.09337C7.69644 5.09337 7.44977 5.0467 7.21644 4.9667C6.98311 4.8867 6.76977 4.7467 6.58311 4.56003C6.39644 4.37337 6.24977 4.12003 6.13644 3.81337C6.02977 3.50003 5.97644 3.12003 5.97644 2.6667C5.97644 2.25337 6.02311 1.88003 6.12311 1.55337C6.21644 1.2267 6.34977 0.9467 6.52977 0.720033C6.70977 0.493367 6.91644 0.320033 7.16311 0.200033C7.40977 0.0800333 7.68311 0.0200334 7.98977 0.0200334C8.32311 0.0200334 8.60977 0.0867 8.86311 0.213367C9.11644 0.340033 9.31644 0.513367 9.47644 0.733367C9.63644 0.953367 9.72311 1.20003 9.75644 1.4667H8.72311C8.68311 1.29337 8.59644 1.16003 8.46977 1.06003C8.34311 0.960033 8.18311 0.913367 7.98977 0.913367C7.66977 0.913367 7.42311 1.05337 7.25644 1.33337C7.08977 1.61337 7.00311 1.99337 7.00311 2.47337H7.03644C7.10977 2.3267 7.20977 2.20003 7.33644 2.10003C7.46311 1.99337 7.60977 1.91337 7.76977 1.86003C7.92977 1.8067 8.10311 1.78003 8.28311 1.78003C8.57644 1.78003 8.83644 1.8467 9.06311 1.9867C9.28977 2.1267 9.46977 2.31337 9.60311 2.55337C9.73644 2.79337 9.80311 3.0667 9.80311 3.38003C9.80311 3.71337 9.72311 4.01337 9.56977 4.27337C9.41644 4.53337 9.19644 4.74003 8.92311 4.8867C8.64311 5.03337 8.32311 5.1067 7.95644 5.1067L7.94977 5.09337ZM7.94977 4.27337C8.10977 4.27337 8.25644 4.23337 8.38311 4.16003C8.50977 4.08003 8.60977 3.98003 8.68311 3.8467C8.75644 3.71337 8.78977 3.5667 8.78977 3.40003C8.78977 3.23337 8.75644 3.0867 8.68311 2.96003C8.60977 2.8267 8.51644 2.7267 8.38977 2.6467C8.26311 2.5667 8.12311 2.53337 7.96311 2.53337C7.84311 2.53337 7.72977 2.55337 7.62977 2.60003C7.52977 2.6467 7.43644 2.7067 7.36311 2.7867C7.28977 2.8667 7.22977 2.96003 7.18311 3.0667C7.13644 3.17337 7.11644 3.2867 7.11644 3.4067C7.11644 3.5667 7.14977 3.71337 7.22977 3.8467C7.30311 3.98003 7.40311 4.0867 7.52977 4.16003C7.65644 4.24003 7.79644 4.28003 7.96311 4.28003L7.94977 4.27337Z"></path>
                          <path d="M12.4831 5.13337C12.0698 5.13337 11.7098 5.0267 11.4098 4.8267C11.1098 4.6267 10.8831 4.3267 10.7231 3.9467C10.5631 3.5667 10.4831 3.10003 10.4831 2.56003C10.4831 2.02003 10.5631 1.56003 10.7231 1.18003C10.8831 0.800033 11.1098 0.513367 11.4098 0.313367C11.7098 0.113367 12.0631 0.0133667 12.4764 0.0133667C12.8898 0.0133667 13.2498 0.113367 13.5431 0.313367C13.8431 0.513367 14.0698 0.800033 14.2298 1.18003C14.3898 1.56003 14.4698 2.02003 14.4698 2.56003C14.4698 3.10003 14.3898 3.5667 14.2298 3.95337C14.0698 4.34003 13.8431 4.63337 13.5431 4.83337C13.2431 5.03337 12.8898 5.14003 12.4764 5.14003L12.4831 5.13337ZM12.4831 4.2667C12.7631 4.2667 12.9898 4.1267 13.1631 3.84003C13.3298 3.55337 13.4164 3.1267 13.4164 2.56003C13.4164 2.1867 13.3764 1.87337 13.3031 1.62003C13.2231 1.37337 13.1164 1.18003 12.9764 1.06003C12.8364 0.940033 12.6698 0.873367 12.4831 0.873367C12.2031 0.873367 11.9764 1.01337 11.8098 1.29337C11.6431 1.57337 11.5564 1.99337 11.5564 2.56003C11.5564 2.94003 11.5964 3.25337 11.6698 3.51337C11.7431 3.7667 11.8564 3.96003 11.9964 4.08003C12.1364 4.2067 12.3031 4.2667 12.4898 4.2667H12.4831Z"></path>
                          <path d="M2.12975 6.27329C1.98309 6.15329 1.66975 6.15329 1.54975 6.27329C1.03642 6.75996 0.663086 7.27329 0.663086 7.95329C0.663086 9.85329 3.03642 11.28 6.44975 11.5333V11.5466L4.94975 13.1466C4.76309 13.3466 4.76975 13.6666 4.96975 13.8533C5.06975 13.9466 5.18975 13.9866 5.30975 13.9866C5.44309 13.9866 5.57642 13.9333 5.67642 13.8266L7.96309 11.3866C7.96309 11.3866 7.98975 11.3466 8.00309 11.3266L8.01642 11.3066C8.01642 11.3066 8.04975 11.2666 8.05642 11.2466V11.2333C8.05642 11.2333 8.07642 11.1733 8.08309 11.14C8.08309 11.1133 8.09642 11.0866 8.09642 11.0533V11.04C8.09642 11.04 8.08309 10.9866 8.07642 10.9533C8.07642 10.92 8.06975 10.8933 8.05642 10.86V10.8466C8.05642 10.8466 8.02309 10.8066 8.00975 10.7866L7.99642 10.7666C7.99642 10.7666 7.97642 10.72 7.95642 10.7066L5.66975 8.26662C5.48309 8.06662 5.16309 8.05329 4.96309 8.24662C4.76309 8.43329 4.74975 8.75329 4.94309 8.95329L6.42309 10.5333C3.40975 10.2866 1.58975 9.07996 1.58975 7.95329C1.58975 7.57996 1.94975 7.20662 2.20309 6.87329C2.38309 6.63996 2.26309 6.39996 2.12309 6.27995L2.12975 6.27329Z"></path>
                          <path d="M14.4697 6.26011C14.3764 6.16011 14.0631 6.08678 13.8097 6.32011C13.5898 6.52678 13.6831 6.81344 13.7698 6.93344C14.0697 7.34011 14.3964 7.59344 14.3964 7.94678C14.3964 8.87344 12.8831 10.0268 9.98975 10.4401C9.73642 10.4734 9.55642 10.7268 9.58975 11.0001C9.62308 11.2734 9.85642 11.4668 10.1164 11.4268C13.2898 10.9734 15.3364 9.60678 15.3364 7.94678C15.3364 7.30011 14.9564 6.80678 14.4764 6.26011H14.4697Z"></path>
                        </svg>
                        <span className="text-white whitespace-no-wrap type-body-sm sm:type-body Button_button__label__vnXgq Button_icon-button__label__HdHBw">
                          3D Tour
                        </span>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="map">
          <MapContainer
            address={propertyDetails.address}
            city={propertyDetails.city}
            country={propertyDetails.country}
          />
        </div>
      </div>
      <div className="test">{/* <ImageSlider slides={SliderData} />; */}</div>
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
