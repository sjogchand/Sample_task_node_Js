import './index.css'
import { useState, useRef } from 'react'
import SpecialModal from '../../all_modals/icontact_from'
import Button from '@mui/material/Button'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Input from '@mui/material/Input'
import axios from 'axios'
import Typography from '@mui/material/Typography'
import { TextField, Box } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useEffect } from 'react'
import Modal from 'react-modal'
import img from '../../../assets/images/modal_check.png'

// export default function EditPropertyForm({ pt, pb }) {
export default function EditPropertyForm({ pt, pb }) {
  const [isError, setIsError] = useState('')
  const [success, setSuccess] = useState(false)
  const [yearBuilt, setYearBuilt] = useState(new Date())
  const [imgErr, setImgErr] = useState('')
  const [multipleImages, setMultipleImages] = useState([])
  const [images, setImages] = useState([])
  const queryParams = new URLSearchParams(window.location.search)
  const item_id = queryParams.get('item_id')

  const [videoSrc, setVideoSrc] = useState(null)
  const [propertyVideo, setPropetyVideo] = useState(null)

  const [isOpen, setIsOpen] = useState(false)

  function toggleModal(state) {
    setIsOpen(state)
  }

  const initialValues = {
    title: '',
    price: '',
    bed_main_house: '',
    iframe_url: '',
    bath_main_house: '',
    bed_ADU: '',
    bath_ADU: '',
    area_of_property: '',
    area_of_main_home: '',
    area_of_ADU: '',
    kid_Safe: '',
    top_amenities: '',
    amenities: '',
    parking: '',
    description: '',
    security: '',
    address: '',
    city: '',
    country: '',
  }
  const [values, setValues] = useState(initialValues)
  const defaultState = {
    title: false,
    price: false,
    iframe_url: false,
    bed_main_house: false,
    bath_main_house: false,
    bed_ADU: false,
    bath_ADU: false,
    yearBuilt: false,
    area_of_property: false,
    area_of_main_home: false,
    area_of_ADU: false,
    kid_Safe: false,
    parking: false,
    top_amenities: false,
    amenities: false,
    description: false,
    security: false,
    address: false,
    city: false,
    country: false,
  }
  const [touched, setTouched] = useState(defaultState)
  const handleFocus = (e) => {
    let { name } = e.target
    setTouched({
      ...touched,
      [name]: true,
    })
  }
  const handleFocus2 = (e) => {
    setTouched({
      ...touched,
      price: true,
    })
  }
  const handleFocus3 = (e) => {
    setTouched({
      ...touched,
      bed_main_house: true,
    })
  }
  const handleFocus4 = (e) => {
    setTouched({
      ...touched,
      bath_main_house: true,
    })
  }
  const handleFocus5 = (e) => {
    setTouched({
      ...touched,
      bed_ADU: true,
    })
  }
  const handleFocus6 = (e) => {
    setTouched({
      ...touched,
      bath_ADU: true,
    })
  }
  const handleFocus7 = (e) => {
    setTouched({
      ...touched,
      area_of_property: true,
    })
  }
  const handleFocus8 = (e) => {
    setTouched({
      ...touched,
      area_of_main_home: true,
    })
  }
  const handleFocus9 = (e) => {
    setTouched({
      ...touched,
      area_of_ADU: true,
    })
  }
  const handleFocus10 = (e) => {
    setTouched({
      ...touched,
      yearBuilt: true,
    })
  }
  const handleFocus17 = (e) => {
    setTouched({
      ...touched,
      address: true,
    })
  }
  const handleFocus18 = (e) => {
    setTouched({
      ...touched,
      city: true,
    })
  }
  const handleFocus19 = (e) => {
    setTouched({
      ...touched,
      country: true,
    })
  }

  const handleFocus20 = (e) => {
    setTouched({
      ...touched,
      iframe_url: true,
    })
  }

  const enteredTitleIsValid = values.title.trim() !== ''
  const enteredPriceIsValid = values.price.trim() !== ''
  const enteredBedForMainHouseIsValid = values.bed_main_house.trim() !== ''
  const enteredBathForMainHouseIsValid = values.bath_main_house.trim() !== ''
  const enteredBathForADUIsValid = values.bath_ADU.trim() !== ''
  const enteredBedForADUIsValid = values.bed_ADU.trim() !== ''
  const enteredAreaForPropertyIsValid = values.area_of_property.trim() !== ''
  const enteredAreaForMainHouseisValid = values.area_of_main_home.trim() !== ''
  const enteredAreaForADUIsValid = values.area_of_ADU.trim() !== ''
  const enteredBuidYearIsValid = yearBuilt !== ''
  const enteredAddressIsValid = values.address.trim() !== ''
  const enteredCityIsValid = values.city.trim() !== ''
  const enteredCountyIsValid = values.country.trim() !== ''
  const enteredIframeUrlIsValid = values.iframe_url.trim() !== ''

  const titleInputIsInvalid =
    (!enteredTitleIsValid && touched.title) ||
    (touched.price && !enteredTitleIsValid) ||
    (touched.bed_main_house && !enteredTitleIsValid) ||
    (touched.bath_main_house && !enteredTitleIsValid) ||
    (touched.bed_ADU && !enteredTitleIsValid) ||
    (touched.bath_ADU && !enteredTitleIsValid) ||
    (touched.area_of_property && !enteredTitleIsValid) ||
    (touched.area_of_main_home && !enteredTitleIsValid) ||
    (touched.area_of_ADU && !enteredTitleIsValid) ||
    (touched.yearBuilt && !enteredTitleIsValid) ||
    (!enteredTitleIsValid && touched.yearBuilt) ||
    (!enteredTitleIsValid && touched.address) ||
    (!enteredTitleIsValid && touched.city) ||
    (!enteredTitleIsValid && touched.country) ||
    (!enteredTitleIsValid && touched.iframe_url)

  const priceInputIsInvalid =
    (!enteredPriceIsValid && touched.price) ||
    (touched.bed_main_house && !enteredPriceIsValid) ||
    (touched.bath_main_house && !enteredPriceIsValid) ||
    (touched.bed_ADU && !enteredPriceIsValid) ||
    (touched.bath_ADU && !enteredPriceIsValid) ||
    (touched.area_of_property && !enteredPriceIsValid) ||
    (touched.area_of_main_home && !enteredPriceIsValid) ||
    (touched.area_of_ADU && !enteredPriceIsValid) ||
    (touched.yearBuilt && !enteredBedForMainHouseIsValid) ||
    (!enteredPriceIsValid && touched.yearBuilt) ||
    (!enteredPriceIsValid && touched.address) ||
    (!enteredPriceIsValid && touched.city) ||
    (!enteredPriceIsValid && touched.country) ||
    (!enteredPriceIsValid && touched.iframe_url)

  const bedForMainHouseInputIsInvalid =
    (!enteredBedForMainHouseIsValid && touched.bed_main_house) ||
    (touched.bath_main_house && !enteredBedForMainHouseIsValid) ||
    (touched.bed_ADU && !enteredBedForMainHouseIsValid) ||
    (touched.bath_ADU && !enteredBedForMainHouseIsValid) ||
    (touched.area_of_property && !enteredBedForMainHouseIsValid) ||
    (touched.area_of_main_home && !enteredBedForMainHouseIsValid) ||
    (touched.area_of_ADU && !enteredBedForMainHouseIsValid) ||
    (touched.yearBuilt && !enteredBedForMainHouseIsValid) ||
    (!enteredBedForMainHouseIsValid && touched.yearBuilt) ||
    (!enteredBedForMainHouseIsValid && touched.address) ||
    (!enteredBedForMainHouseIsValid && touched.city) ||
    (!enteredBedForMainHouseIsValid && touched.country) ||
    (!enteredBedForMainHouseIsValid && touched.iframe_url)

  const bathForMainHouseInputIsInvalid =
    (!enteredBathForMainHouseIsValid && touched.bath_main_house) ||
    (touched.bed_ADU && !enteredBathForMainHouseIsValid) ||
    (touched.bath_ADU && !enteredBathForMainHouseIsValid) ||
    (touched.area_of_property && !enteredBathForMainHouseIsValid) ||
    (touched.area_of_main_home && !enteredBathForMainHouseIsValid) ||
    (touched.area_of_ADU && !enteredBathForMainHouseIsValid) ||
    (!enteredBathForMainHouseIsValid && touched.yearBuilt) ||
    (!enteredBathForMainHouseIsValid && touched.address) ||
    (!enteredBathForMainHouseIsValid && touched.city) ||
    (!enteredBathForMainHouseIsValid && touched.country) ||
    (!enteredBathForMainHouseIsValid && touched.iframe_url)

  const bedADUInputIsInvalid =
    (!enteredBedForADUIsValid && touched.bed_ADU) ||
    (touched.bath_ADU && !enteredBedForADUIsValid) ||
    (touched.area_of_property && !enteredBedForADUIsValid) ||
    (touched.area_of_main_home && !enteredBedForADUIsValid) ||
    (touched.area_of_ADU && !enteredBedForADUIsValid) ||
    (touched.yearBuilt && !enteredBedForADUIsValid) ||
    (!enteredBedForADUIsValid && touched.address) ||
    (!enteredBedForADUIsValid && touched.city) ||
    (!enteredBedForADUIsValid && touched.country) ||
    (!enteredBedForADUIsValid && touched.iframe_url)

  const bathADUInputIsInvalid =
    (!enteredBathForADUIsValid && touched.bath_ADU) ||
    (touched.area_of_property && !enteredBathForADUIsValid) ||
    (touched.area_of_main_home && !enteredBathForADUIsValid) ||
    (touched.area_of_ADU && !enteredBathForADUIsValid) ||
    (touched.yearBuilt && !enteredBathForADUIsValid) ||
    (!enteredBathForADUIsValid && touched.address) ||
    (!enteredBathForADUIsValid && touched.city) ||
    (!enteredBathForADUIsValid && touched.country) ||
    (!enteredBathForADUIsValid && touched.iframe_url)

  const areaPropertyInputIsInvalid =
    (!enteredAreaForPropertyIsValid && touched.area_of_property) ||
    (touched.area_of_main_home && !enteredAreaForPropertyIsValid) ||
    (touched.area_of_ADU && !enteredAreaForPropertyIsValid) ||
    (!enteredAreaForPropertyIsValid && touched.yearBuilt) ||
    (!enteredAreaForPropertyIsValid && touched.address) ||
    (!enteredAreaForPropertyIsValid && touched.city) ||
    (!enteredAreaForPropertyIsValid && touched.country) ||
    (!enteredAreaForPropertyIsValid && touched.iframe_url)

  const areaMainHoouseInputIsInvalid =
    (!enteredAreaForMainHouseisValid && touched.area_of_main_home) ||
    (touched.area_of_ADU && !enteredAreaForMainHouseisValid) ||
    (touched.yearBuilt && !enteredAreaForMainHouseisValid) ||
    (!enteredAreaForMainHouseisValid && touched.address) ||
    (!enteredAreaForMainHouseisValid && touched.city) ||
    (!enteredAreaForMainHouseisValid && touched.country) ||
    (!enteredAreaForMainHouseisValid && touched.iframe_url)

  const areaADUInputIsInvalid =
    (!enteredAreaForADUIsValid && touched.area_of_ADU) ||
    (touched.yearBuilt && !enteredAreaForADUIsValid) ||
    (!enteredAreaForADUIsValid && touched.address) ||
    (!enteredAreaForADUIsValid && touched.city) ||
    (!enteredAreaForADUIsValid && touched.country) ||
    (!enteredAreaForADUIsValid && touched.iframe_url)

  const yearBuildInputIsInvalid =
    (!enteredBuidYearIsValid && touched.yearBuilt) ||
    (!enteredBuidYearIsValid && touched.address) ||
    (!enteredBuidYearIsValid && touched.city) ||
    (!enteredBuidYearIsValid && touched.country) ||
    (!enteredBuidYearIsValid && touched.iframe_url)

  const addressInputIsInvalid =
    (!enteredAddressIsValid && touched.address) ||
    (!enteredAddressIsValid && touched.city) ||
    (!enteredAddressIsValid && touched.country) ||
    (!enteredAddressIsValid && touched.iframe_url)

  const cityInputIsInvalid =
    (!enteredCityIsValid && touched.city) ||
    (!enteredCityIsValid && touched.country) ||
    (!enteredCityIsValid && touched.iframe_url)

  const countryInputIsInvalid =
    (!enteredCountyIsValid && touched.country) ||
    (!enteredCountyIsValid && touched.iframe_url)

  const iFrameUrlInputIsInvalid = !enteredIframeUrlIsValid && touched.iframe_url

  const handleinputchange = (e) => {
    setIsError('')
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const removeImage = (e) => {
    setImages(Array.from(images).filter((a) => a.name !== e))
    if (images.length === 0) setImgErr('please select property image.')
  }

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
          details = {
            ...details,
            title: details.title,
            price: details.price,
            bed_main_house: details.configuration.main_house_bed,
            bath_main_house: details.configuration.main_house_bath,
            bed_ADU: details.configuration.adu_bed,
            bath_ADU: details.configuration.adu_bath,
            area_of_property: details.area.area_of_property,
            area_of_main_home: details.area.area_of_main_home,
            area_of_ADU: details.area.area_of_ADU,
            kid_Safe: details.kid_Safe,
            top_amenities: details.top_amenities,
            amenities: details.amenities,
            parking: details.parking,
            description: details.description,
            security: details.security,
            address: details.address,
            city: details.city,
            country: details.country,
          }
          // console.log(`http://localhost:1055/${details.video_url}`, 'sss')
          setVideoSrc(`http://localhost:1055/${details.video_url}`)
          setValues(details)
          console.log(details.property_image)
          setImages(details.property_image)
        }
      })
  }, [])

  const onSubmitHandler = (event) => {
    event.preventDefault()
    setTouched({
      title: true,
      price: true,
      iframe_url: true,
      bed_main_house: true,
      bath_main_house: true,
      bed_ADU: true,
      bath_ADU: true,
      yearBuilt: true,
      area_of_property: true,
      area_of_main_home: true,
      area_of_ADU: true,
      kid_Safe: true,
      parking: true,
      top_amenities: true,
      amenities: true,
      description: true,
      security: true,
      address: true,
      city: true,
      country: true,
    })

    if (
      !enteredTitleIsValid ||
      !enteredPriceIsValid ||
      !enteredIframeUrlIsValid ||
      !enteredBedForMainHouseIsValid ||
      !enteredBathForMainHouseIsValid ||
      !enteredBedForADUIsValid ||
      !enteredBathForADUIsValid ||
      !enteredAreaForPropertyIsValid ||
      !enteredAreaForMainHouseisValid ||
      !enteredAreaForADUIsValid ||
      !enteredAddressIsValid ||
      !enteredCityIsValid ||
      !enteredCountyIsValid
    ) {
      // return
    }

    let area = {
      area_of_property: values.area_of_property,
      area_of_main_home: values.area_of_main_home,
      area_of_ADU: values.area_of_ADU,
    }
    let configuration = {
      main_house_bed: values.bed_main_house,
      main_house_bath: values.bath_main_house,
      adu_bed: values.bed_ADU,
      adu_bath: values.bath_ADU,
    }
    let formData = new FormData()
    formData.append('id', item_id)
    formData.append('title', values.title)
    formData.append('description', values.description)
    formData.append('price', values.price)
    formData.append('area', JSON.stringify(area))
    formData.append('configuration', JSON.stringify(configuration))
    formData.append('year_built', yearBuilt)
    formData.append('security', values.security)
    formData.append('kid_safe', values.kid_Safe)
    formData.append('parking', values.parking)
    formData.append('top_amenities', values.top_amenities)
    formData.append('amenities', values.amenities)

    formData.append('address', values.address)
    formData.append('city', values.city)
    formData.append('country', values.country)
    formData.append('iframe_url', values.iframe_url)
    formData.append('property_video', propertyVideo)

    if (images.length < 1) {
      setImgErr('please select property image.')
      return false
    } else {
      Array.from(images).forEach((item) => {
        formData.append('property_images', item)
      })
    }
    const config = { headers: { 'content-type': 'multipart/form-data' } }
    axios
      .post('http://localhost:1055/api/properties/update', formData, config)
      .then((response) => {
        if (response.data.status === 200) {
          setSuccess(true)
          setValues(initialValues)
          setTouched(defaultState)
          setYearBuilt(new Date())
          setImages([])
          setIsOpen(true)
          setPropetyVideo(null)
        } else if (response.data.status === 422) {
          setIsError(response.data.message)
          setTouched(defaultState)
          setYearBuilt(new Date())
        }
      })
      .catch((err) => {})
  }

  function checkImage(url) {
    if (url?.name !== undefined) return false
    const img = new Image()
    img.src = url
    return new Promise((resolve) => {
      img.onload = () => resolve(true)
      img.onerror = () => resolve(false)
    })
  }

  const handleChange = (event) => {
    const file = event.target.files[0]
    setPropetyVideo(file)
    if (!file) return
    setVideoSrc(URL.createObjectURL(file))
  }

  const videoRef = useRef()

  useEffect(() => {
    videoRef.current?.load()
  }, [videoSrc])

  return (
    <>
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
        <h3 className="modal_heading"> Success! </h3>
        <p className="modal_para">Property Updated Successfully.</p>
        <button
          smooth
          className="modal_btn"
          onClick={(e) => {
            setIsOpen(false)
          }}
        >
          OK
        </button>
      </Modal>
      <div className="theme_container">
        <div
          style={{
            paddingTop: pt,
            paddingBottom: pb,
          }}
          className="get_started_container"
        >
          <h2>Add Properties</h2>
          <h1>Add Properties details</h1>
          <p>
            Take the next step to owning more property than you ever thought
            possible in your current stage of life. We're excited to help you
            build prosperity and share the wealth. We're here to support you all
            the way to make it happen.
          </p>
          <div className="get_started_inputs">
            <Typography
              sx={{
                fontSize: '0.9rem',
                textAlign: 'center',
                color: 'red',
              }}
            >
              {' '}
              {isError}
              {imgErr}
            </Typography>

            <form onSubmit={onSubmitHandler} encType="multipart/form-data">
              <Box
                sx={{
                  '& > :not(style)': {
                    m: 1,
                    width: '43%',
                  },
                  textAlign: 'center',
                }}
              >
                <TextField
                  id="outlined-basic"
                  onChange={handleinputchange}
                  value={values.title}
                  name="title"
                  label="Title"
                  variant="outlined"
                  onBlur={handleFocus}
                  error={titleInputIsInvalid}
                  helperText={
                    titleInputIsInvalid ? 'Please enter a Property Title' : ' '
                  }
                />
                <TextField
                  id="outlined-basic"
                  type="number"
                  onChange={handleinputchange}
                  value={values.price}
                  name="price"
                  label="Whole Price"
                  variant="outlined"
                  onBlur={handleFocus2}
                  error={priceInputIsInvalid}
                  helperText={
                    priceInputIsInvalid ? 'Please enter a Property price' : ' '
                  }
                />
              </Box>
              <Box
                sx={{
                  '& > :not(style)': {
                    m: 1,
                    width: '25ch',
                  },
                  textAlign: 'center',
                }}
              >
                <TextField
                  id="outlined-basic"
                  type="number"
                  onChange={handleinputchange}
                  value={values.bed_main_house}
                  name="bed_main_house"
                  label="Beds for Main House"
                  variant="outlined"
                  onBlur={handleFocus3}
                  error={bedForMainHouseInputIsInvalid}
                  helperText={
                    bedForMainHouseInputIsInvalid
                      ? 'Please enter a bed for main house'
                      : ' '
                  }
                />
                <TextField
                  id="outlined-basic"
                  type="number"
                  onChange={handleinputchange}
                  value={values.bath_main_house}
                  name="bath_main_house"
                  label="Bath for Main House"
                  variant="outlined"
                  onBlur={handleFocus4}
                  error={bathForMainHouseInputIsInvalid}
                  helperText={
                    bathForMainHouseInputIsInvalid
                      ? 'Please enter a bath for main house'
                      : ' '
                  }
                />
                <TextField
                  id="outlined-basic"
                  type="number"
                  onChange={handleinputchange}
                  value={values.bed_ADU}
                  name="bed_ADU"
                  label="Beds for ADU"
                  variant="outlined"
                  onBlur={handleFocus5}
                  error={bedADUInputIsInvalid}
                  helperText={
                    bedADUInputIsInvalid
                      ? 'Please enter a bath for main house'
                      : ' '
                  }
                />
                <TextField
                  id="outlined-basic"
                  type="number"
                  onChange={handleinputchange}
                  value={values.bath_ADU}
                  name="bath_ADU"
                  label="Bath for ADU"
                  variant="outlined"
                  onBlur={handleFocus6}
                  error={bathADUInputIsInvalid}
                  helperText={
                    bathADUInputIsInvalid
                      ? 'Please enter a bath for main house'
                      : ' '
                  }
                />
              </Box>
              <Box
                sx={{
                  '& > :not(style)': {
                    m: 1,
                    width: '25ch',
                  },
                  textAlign: 'center',
                }}
              >
                <TextField
                  id="outlined-basic"
                  type="number"
                  onChange={handleinputchange}
                  value={values.area_of_property}
                  name="area_of_property"
                  label="Area of property"
                  variant="outlined"
                  onBlur={handleFocus7}
                  error={areaPropertyInputIsInvalid}
                  helperText={
                    areaPropertyInputIsInvalid
                      ? 'Please enter property area'
                      : ' '
                  }
                />
                <TextField
                  id="outlined-basic"
                  type="number"
                  onChange={handleinputchange}
                  value={values.area_of_main_home}
                  name="area_of_main_home"
                  label="Area of Main home"
                  variant="outlined"
                  onBlur={handleFocus8}
                  error={areaMainHoouseInputIsInvalid}
                  helperText={
                    areaMainHoouseInputIsInvalid
                      ? 'Please enter property area'
                      : ' '
                  }
                />
                <TextField
                  id="outlined-basic"
                  type="number"
                  onChange={handleinputchange}
                  value={values.area_of_ADU}
                  name="area_of_ADU"
                  label="Area of ADU"
                  variant="outlined"
                  onBlur={handleFocus9}
                  error={areaADUInputIsInvalid}
                  helperText={
                    areaADUInputIsInvalid ? 'Please enter property area' : ' '
                  }
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    style={{ height: '1.4375em' }}
                    views={['year']}
                    label="Year only"
                    //   value={yearBuilt}
                    //   onChange={(newValue) => {
                    //     setYearBuilt(newValue)
                    //   }}
                    value={yearBuilt}
                    onChange={setYearBuilt}
                    animateYearScrolling
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        onBlur={handleFocus10}
                        error={yearBuildInputIsInvalid}
                        helperText={
                          yearBuildInputIsInvalid
                            ? 'Please enter year build'
                            : ' '
                        }
                      />
                    )}
                  />
                </LocalizationProvider>
              </Box>
              <Box
                sx={{
                  '& > :not(style)': {
                    m: 1,
                    width: '25ch',
                  },
                  textAlign: 'center',
                }}
              >
                <TextField
                  id="outlined-basic"
                  onChange={handleinputchange}
                  value={values.kid_Safe}
                  name="kid_Safe"
                  label="Kid Safe"
                  variant="outlined"
                  //  onBlur={handleFocus11}
                  // error={areaPropertyInputIsInvalid}
                  // helperText={
                  //   areaPropertyInputIsInvalid
                  //     ? 'Please enter property area'
                  //     : ' '
                  // }
                />
                <TextField
                  id="outlined-basic"
                  onChange={handleinputchange}
                  value={values.parking}
                  name="parking"
                  label="Parking"
                  variant="outlined"
                  //  onBlur={handleFocus12}
                  // error={areaPropertyInputIsInvalid}
                  // helperText={
                  //   areaPropertyInputIsInvalid
                  //     ? 'Please enter property area'
                  //     : ' '
                  // }
                />
                {/* <Autocomplete
                className="tag_input"
                multiple
                id="tags-filled"
                options={[]}
                defaultValue={topAmenities}
                value={topAmenities}
                freeSolo
                onChange={(e) =>
                  setTopAmenities([...topAmenities, e.target.value])
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    // variant="filled"
                    // label="freeSolo"
                    // placeholder="Favorites"
                    name="top_amenities"
                    label="Top amenities"
                    variant="outlined"
                    // value={topAmenities}
                  />
                )}
              /> */}
                <TextField
                  id="outlined-basic"
                  onChange={handleinputchange}
                  value={values.top_amenities}
                  name="top_amenities"
                  label="Top amenities(comma seperated value)"
                  variant="outlined"
                  //  onBlur={handleFocus13}
                  // error={areaPropertyInputIsInvalid}
                  // helperText={
                  //   areaPropertyInputIsInvalid
                  //     ? 'Please enter property area'
                  //     : ' '
                  // }
                />
                {/* <Autocomplete
                multiple
                className="tag_input"
                id="tags-filled"
                options={[]}
                defaultValue={amenities}
                freeSolo
                onChange={(e) => setAmenities([...amenities, e.target.value])}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    // variant="filled"
                    // label="freeSolo"
                    // placeholder="Favorites"
                    name="amenities"
                    label="Amenities"
                    variant="outlined"
                  />
                )}
              /> */}
                <TextField
                  id="outlined-basic"
                  onChange={handleinputchange}
                  value={values.amenities}
                  name="amenities"
                  label="Amenities(comma seperated value)"
                  variant="outlined"
                  //  onBlur={handleFocus14}
                  // error={areaPropertyInputIsInvalid}
                  // helperText={
                  //   areaPropertyInputIsInvalid
                  //     ? 'Please enter property area'
                  //     : ' '
                  // }
                />
              </Box>
              <Box
                sx={{
                  '& > :not(style)': {
                    m: 1,
                    width: '100ch',
                  },
                  textAlign: 'center',
                }}
              >
                <TextareaAutosize
                  aria-label="Property Details"
                  onChange={handleinputchange}
                  value={values.description}
                  name="description"
                  placeholder="Property Details"
                  style={{ width: '87.5%', height: '100px' }}
                  //  onBlur={handleFocus15}
                  // error={areaPropertyInputIsInvalid}
                  // helperText={
                  //   areaPropertyInputIsInvalid
                  //     ? 'Please enter property area'
                  //     : ' '
                  // }
                />
              </Box>
              <Box
                sx={{
                  '& > :not(style)': {
                    m: 1,
                    width: '25ch',
                  },
                  textAlign: 'center',
                }}
              >
                <TextField
                  id="outlined-basic"
                  onChange={handleinputchange}
                  value={values.security}
                  name="security"
                  label="Security"
                  variant="outlined"
                  //  onBlur={handleFocus16}
                  // error={areaPropertyInputIsInvalid}
                  // helperText={
                  //   areaPropertyInputIsInvalid
                  //     ? 'Please enter property area'
                  //     : ' '
                  // }
                />
                <TextField
                  id="outlined-basic"
                  onChange={handleinputchange}
                  value={values.address}
                  name="address"
                  label="Address"
                  variant="outlined"
                  onBlur={handleFocus17}
                  error={addressInputIsInvalid}
                  helperText={
                    addressInputIsInvalid ? 'Please enter Address' : ' '
                  }
                />
                <TextField
                  id="outlined-basic"
                  onChange={handleinputchange}
                  value={values.city}
                  name="city"
                  label="City"
                  variant="outlined"
                  onBlur={handleFocus18}
                  error={cityInputIsInvalid}
                  helperText={cityInputIsInvalid ? 'Please enter city' : ' '}
                />
                <TextField
                  id="outlined-basic"
                  onChange={handleinputchange}
                  value={values.country}
                  name="country"
                  label="Country"
                  variant="outlined"
                  onBlur={handleFocus19}
                  error={countryInputIsInvalid}
                  helperText={countryInputIsInvalid ? 'Please enter city' : ' '}
                />
              </Box>
              <Box
                sx={{
                  '& > :not(style)': {
                    m: 1,
                    width: '43%',
                  },
                  textAlign: 'center',
                }}
              >
                <TextField
                  id="outlined-basic"
                  onChange={handleinputchange}
                  value={values.iframe_url}
                  name="iframe_url"
                  label="Iframe Url"
                  variant="outlined"
                  onBlur={handleFocus20}
                  error={iFrameUrlInputIsInvalid}
                  helperText={
                    iFrameUrlInputIsInvalid ? 'Please enter Iframe Url' : ' '
                  }
                />
                <TextField
                  id="outlined-basic"
                  type="file"
                  label="Select Video"
                  className="form-control form-control-sm"
                  accept="image/*,gif/*,video/mp4,video/x-m4v,video/*"
                  onChange={(event) => {
                    handleChange(event)
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  // value={videoSrc}
                />
                <video ref={videoRef} width="260" height="150" controls>
                  <source src={videoSrc} />
                  Your browser does not support the video tag.
                </video>
              </Box>
              {/* <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#F1F1F1',
                p: 2,
              }}
            >
              {previewUrl && (
                <Button onClick={(e) => removeImage(e)}>Remove</Button>
              )}
              {previewUrl && <img src={previewUrl} height={80} alt="profile" />}
              <section style={{ cursor: 'pointer' }}>
                <div
                  className="drop_zone"
                  onDrop={(e) => handleDrop(e)}
                  onDragOver={(e) => handleDragOver(e)}
                  onClick={() => fileInput.current.click()}
                >
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInput}
                    hidden
                    onChange={(e) => handleFile(e.target.files[0])}
                  />
                  <Typography
                    sx={{
                      fontSize: '0.9rem',
                      textAlign: 'center',
                      color: 'red',
                    }}
                  >
                    {imgErr}
                  </Typography>
                  <Typography
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: 'primary.main',
                      fontSize: '1.3rem',
                      fontWeight: 500,
                    }}
                  >
                    <AttachFileIcon fontSize="medium" />
                    <span
                      style={{
                        fontWeight: '700',
                        paddingLeft: '10px',
                        paddingRight: '5px',
                      }}
                    >
                      Drop
                    </span>
                    Image here or
                    <span
                      style={{
                        fontWeight: '700',
                        paddingLeft: '5px',
                        paddingRight: '5px',
                      }}
                    >
                      Click
                    </span>
                    here to upload
                  </Typography>
                  <Box sx={{ mt: 1, color: '#A7A7A7', textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '0.9rem' }}>
                      Supported Files: JPG, PNG
                    </Typography>
                    <Typography sx={{ fontSize: '0.9rem', paddingTop: '0px' }}>
                      Supported Resolution: 1358 x 180 Px
                    </Typography>
                  </Box>
                </div>
              </section>
            </Box> */}
              {/* {multipleImages && (
              <Button onClick={(e) => removeImage(e)}>Remove</Button>
            )}
            {previewUrl && <img src={previewUrl} height={80} alt="profile" />} */}
              <Typography
                sx={{
                  fontSize: '0.9rem',
                  textAlign: 'center',
                  color: 'red',
                }}
              >
                {imgErr}
              </Typography>
              <Box
                className="image_section"
                sx={{
                  display: 'flex',
                  backgroundColor: '#F1F1F1',
                  p: 2,
                }}
              >
                {Array.from(images).map((image, index) => (
                  <div className="image_parent_div" key={index}>
                    <div className="image_div">
                      <Button onClick={(e) => removeImage(image.name)}>
                        Remove
                      </Button>
                      {/* {console.log(image, 'image', checkImage(image))} */}
                      <img
                        className="image"
                        src={
                          checkImage(image)
                            ? `http://localhost:1055/${image}`
                            : URL.createObjectURL(image)
                            ? URL.createObjectURL(image)
                            : null
                        }
                        height={80}
                        alt="profile"
                        key={image}
                      />
                    </div>
                  </div>
                ))}
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  backgroundColor: '#F1F1F1',
                  justifyContent: 'center',
                  p: 2,
                  mt: 1,
                  color: '#A7A7A7',
                  textAlign: 'center',
                }}
              >
                <input
                  onChange={(e) => {
                    setImages(e.target.files)
                  }}
                  type="file"
                  name="file"
                  className="image_input"
                  accept="image/*"
                  multiple
                />
                {/* <input
                type="file"
                name="file"
                className="image_input"
                accept="image/*"
                multiple
                {...register('file', { required: true })}
                onChange={changeMultipleFiles}
              /> */}
              </Box>

              <Box sx={{ mt: 1, color: '#A7A7A7', textAlign: 'center' }}>
                <Button onClick={onSubmitHandler} variant="contained">
                  Add Property
                </Button>
                {success ? <SpecialModal redirect={'manage-property'} /> : null}
              </Box>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
