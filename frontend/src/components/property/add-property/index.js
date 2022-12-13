import './index.css'
import { useState, useRef } from 'react'
import SpecialModal from '../../all_modals/icontact_from'
import Button from '@mui/material/Button'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Input from '@mui/material/Input'
import axios from 'axios'
import Typography from '@mui/material/Typography'
import { TextField, Box } from '@mui/material'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

// export default function AddPropertyForm({ pt, pb }) {
export default function AddPropertyForm({ pt, pb }) {
  const [isError, setIsError] = useState('')
  const [success, setSuccess] = useState(false)
  const [yearBuilt, setYearBuilt] = useState(new Date())
  const [imgErr, setImgErr] = useState('')

  const initialValues = {
    title: '',
    price: '',
    bed_main_house: '',
    bath_main_house: '',
    bed_ADU: '',
    bath_ADU: '',
    area_of_property: '',
    area_of_main_home: '',
    area_of_ADU: '',
    kid_Safe: '',
    parking: '',
    top_amenities: '',
    amenities: '',
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
  const handleFocus11 = (e) => {
    setTouched({
      ...touched,
      kid_Safe: true,
    })
  }
  const handleFocus12 = (e) => {
    setTouched({
      ...touched,
      parking: true,
    })
  }
  const handleFocus13 = (e) => {
    setTouched({
      ...touched,
      top_amenities: true,
    })
  }
  const handleFocus14 = (e) => {
    setTouched({
      ...touched,
      amenities: true,
    })
  }
  const handleFocus15 = (e) => {
    setTouched({
      ...touched,
      amenities: true,
    })
  }
  const handleFocus16 = (e) => {
    setTouched({
      ...touched,
      security: true,
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
  const enteredTitleIsValid = values.title.trim() !== ''
  const enteredPriceIsValid = values.price.trim() !== ''
  const enteredBedForMainHouseIsValid = values.bed_main_house.trim() !== ''
  const enteredBathForMainHouseIsValid = values.bath_main_house.trim() !== ''
  const enteredBathForADUIsValid = values.bed_ADU.trim() !== ''
  //   const enteredBedForADUIsValid = values.bath_ADU.trim() !== ''
  const enteredAreaForPropertyIsValid = values.area_of_property.trim() !== ''
  //   const enteredAreaForMainHouseisValid = values.area_of_main_home.trim() !== ''
  //   const enteredAreaForADUIsValid = values.area_of_ADU.trim() !== ''
  const enteredBuidYearIsValid = yearBuilt !== ''
  //   const enteredKidSafeIsValid = values.kid_Safe.trim() !== ''
  //   const enteredParkingIsValid = values.parking.trim() !== ''
  //   const enteredTopAmenitiesIsValid = values.top_amenities.trim() !== ''
  //   const enteredAmenitiesIsValid = values.amenities.trim() !== ''
  //   const enteredDescriptionValid = values.description.trim() !== ''
  //   const enteredSecurityIsValid = values.security.trim() !== ''
  const enteredAddressIsValid = values.address.trim() !== ''
  const enteredCityIsValid = values.city.trim() !== ''
  const enteredCountyIsValid = values.country.trim() !== ''

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
    (!enteredTitleIsValid && touched.country)

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
    (!enteredPriceIsValid && touched.country)

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
    (!enteredBedForMainHouseIsValid && touched.country)

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
    (!enteredBathForMainHouseIsValid && touched.country)

  //   const bedADUInputIsInvalid =
  //     (!enteredBedForADUIsValid && touched.bed_ADU) ||
  //     (touched.bath_ADU && !enteredBedForADUIsValid) ||
  //     (touched.area_of_property && !enteredBathForADUIsValid) ||
  //     (touched.area_of_main_home && !enteredBathForADUIsValid) ||
  //     (touched.area_of_ADU && !enteredBathForADUIsValid) ||
  //     (touched.yearBuilt && !enteredBathForADUIsValid)

  //   const bathADUInputIsInvalid =
  //     (!enteredBathForADUIsValid && touched.bath_ADU) ||
  //     (touched.area_of_property && !enteredBathForADUIsValid) ||
  //     (touched.area_of_main_home && !enteredBathForADUIsValid) ||
  //     (touched.area_of_ADU && !enteredBathForADUIsValid) ||
  //     (touched.yearBuilt && !enteredBathForADUIsValid)

  const areaPropertyInputIsInvalid =
    (!enteredAreaForPropertyIsValid && touched.area_of_property) ||
    (touched.area_of_main_home && !enteredAreaForPropertyIsValid) ||
    (touched.area_of_ADU && !enteredAreaForPropertyIsValid) ||
    (!enteredAreaForPropertyIsValid && touched.yearBuilt) ||
    (!enteredAreaForPropertyIsValid && touched.address) ||
    (!enteredAreaForPropertyIsValid && touched.city) ||
    (!enteredAreaForPropertyIsValid && touched.country)

  //   const areaMainHoouseInputIsInvalid =
  //     (!enteredAreaForMainHouseisValid && touched.area_of_main_home) ||
  //     (touched.area_of_ADU && !enteredAreaForMainHouseisValid) ||
  //     (touched.yearBuilt && !enteredAreaForMainHouseisValid)

  //   const areaADUInputIsInvalid =
  //     (!enteredAreaForADUIsValid && touched.area_of_ADU) ||
  //     (touched.yearBuilt && !enteredAreaForADUIsValid)
  const yearBuildInputIsInvalid =
    (!enteredBuidYearIsValid && touched.yearBuilt) ||
    (!enteredBuidYearIsValid && touched.address) ||
    (!enteredBuidYearIsValid && touched.city) ||
    (!enteredBuidYearIsValid && touched.country)

  //   const kidSafeInputIsInvalid = !enteredKidSafeIsValid && touched.kid_Safe

  //   const parkingInputIsInvalid = !enteredParkingIsValid && touched.parking

  //   const topAmenitiesInputIsInvalid =
  //     !enteredTopAmenitiesIsValid && touched.top_amenities

  //   const amenitiesInputIsInvalid = !enteredAmenitiesIsValid && touched.amenities

  //   const descriptionInputIsInvalid =
  //     !enteredAmenitiesIsValid && touched.description

  //   const securityInputIsInvalid = !enteredSecurityIsValid && touched.security

  const addressInputIsInvalid =
    (!enteredAddressIsValid && touched.address) ||
    (!enteredAddressIsValid && touched.city) ||
    (!enteredAddressIsValid && touched.country)

  const cityInputIsInvalid =
    (!enteredCityIsValid && touched.city) ||
    (!enteredCityIsValid && touched.country)

  const countryInputIsInvalid = !enteredCountyIsValid && touched.country

  const handleinputchange = (e) => {
    setIsError('')
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const fileInput = useRef(null)

  const [previewUrl, setPreviewUrl] = useState('')
  const handleFile = (file) => {
    //you can carry out any file validations here...
    setPreviewUrl(URL.createObjectURL(file))
    setImgErr('')
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setImgErr('')
    // setPreviewUrl(URL.createObjectURL(imageFile));
  }
  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    let imageFile = e.dataTransfer.files[0]
    setPreviewUrl(URL.createObjectURL(imageFile))
    setImgErr('')
  }

  const removeImage = (e) => {
    e.preventDefault()
    setPreviewUrl(undefined)
    setImgErr('please select property image.')
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    setTouched({
      title: true,
      price: true,
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
      !enteredBedForMainHouseIsValid ||
      !enteredBathForMainHouseIsValid ||
      !enteredAreaForPropertyIsValid ||
      !enteredAddressIsValid ||
      !enteredCityIsValid ||
      !enteredCountyIsValid
    ) {
      return
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
    formData.append('title', values.title)
    formData.append('description', values.description)
    formData.append('price', values.price)
    formData.append('area', JSON.stringify(area))
    formData.append('configuration', JSON.stringify(configuration))
    formData.append('year_built', yearBuilt)
    formData.append('security', values.security)
    formData.append('kid_safe', values.kid_Safe)
    formData.append('parking', values.parking)
    formData.append('image_path', values.top_amenities)
    formData.append('top_amenities', values.top_amenities)
    formData.append('amenities', values.amenities)
    formData.append('address', values.address)
    formData.append('city', values.city)
    formData.append('country', values.country)

    if (
      fileInput.current.files.length < 1 ||
      previewUrl === '' ||
      previewUrl === undefined
    ) {
      setImgErr('please select property image.')
      return false
    } else {
      formData.append('properties_image', fileInput.current.files[0])
    }
    const config = { headers: { 'content-type': 'multipart/form-data' } }
    axios
      .post('http://localhost:1055/api/properties/save', formData, config)
      .then((response) => {
        // console.log(response)
        if (response.data.status === 200) {
          setSuccess(true)
          setValues(initialValues)
          setTouched(defaultState)
          setYearBuilt(new Date())
          setPreviewUrl(undefined)
        } else if (response.data.status === 422) {
          setIsError(response.data.message)
          setValues(initialValues)
          setTouched(defaultState)
          setYearBuilt(new Date())
          setPreviewUrl(undefined)
        }
      })
      .catch((err) => {})
  }

  return (
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
          <form onSubmit={onSubmitHandler}>
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
                // onBlur={handleFocus5}
                // error={bathForMainHouseInputIsInvalid}
                // helperText={
                //   bathForMainHouseInputIsInvalid
                //     ? 'Please enter a bath for main house'
                //     : ' '
                // }
              />
              <TextField
                id="outlined-basic"
                type="number"
                onChange={handleinputchange}
                value={values.bath_ADU}
                name="bath_ADU"
                label="Bath for ADU"
                variant="outlined"
                // onBlur={handleFocus6}
                // error={bathForMainHouseInputIsInvalid}
                // helperText={
                //   bathForMainHouseInputIsInvalid
                //     ? 'Please enter a bath for main house'
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
                onChange={handleinputchange}
                value={values.area_of_main_home}
                name="area_of_main_home"
                label="Area of Main home"
                variant="outlined"
                //  onBlur={handleFocus8}
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
                value={values.area_of_ADU}
                name="area_of_ADU"
                label="Area of ADU"
                variant="outlined"
                //  onBlur={handleFocus9}
                // error={areaPropertyInputIsInvalid}
                // helperText={
                //   areaPropertyInputIsInvalid
                //     ? 'Please enter property area'
                //     : ' '
                // }
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
              <TextField
                id="outlined-basic"
                onChange={handleinputchange}
                value={values.top_amenities}
                name="top_amenities"
                label="Top amenities"
                variant="outlined"
                //  onBlur={handleFocus13}
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
                value={values.amenities}
                name="amenities"
                label="Amenities"
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
            </Box>
            <Box sx={{ mt: 1, color: '#A7A7A7', textAlign: 'center' }}>
              <Button onClick={onSubmitHandler} variant="contained">
                Add Property
              </Button>
              {success ? <SpecialModal /> : null}
            </Box>
          </form>
        </div>
      </div>
    </div>
  )
}
