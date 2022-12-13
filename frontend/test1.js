import './index.css'
import Theme_Button from '../../general_components/button'
import { useState, useRef } from 'react'
import SpecialModal from '../../all_modals/icontact_from'
import Button from '@mui/material/Button'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Input from '@mui/material/Input'
import axios from 'axios'
import Typography from '@mui/material/Typography'
import { TextField, Box } from '@mui/material'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import { jsxDEV as _jsxDEV } from 'react/jsx-dev-runtime'

// export default function AddPropertyForm({ pt, pb }) {
export default function AddPropertyForm({ pt, pb }) {
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
    year_Built: '',
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
  const handleinputchange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  // const fileInput = useRef(null)
  // const [previewUrl, setPreviewUrl] = useState('')
  // const handleFile = (file) => {
  //   //you can carry out any file validations here...
  //   setPreviewUrl(URL.createObjectURL(file))
  // }
  // const handleDragOver = (e) => {
  //   e.preventDefault()
  //   e.stopPropagation() //
  //   let imageFile = e.dataTransfer.files[0];
  //   setPreviewUrl(URL.createObjectURL(imageFile))
  // }
  // const handleDrop = (e) => {
  //   e.preventDefault()
  //   e.stopPropagation()
  //   let imageFile = e.dataTransfer.files[0]
  //   setPreviewUrl(URL.createObjectURL(imageFile))
  // }
  // const removeImage = (e) => {
  //   e.preventDefault()
  //   setPreviewUrl(undefined)
  // }
  const onSubmitHandler = (event) => {
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
    formData.append('area', area)
    formData.append('configuration', configuration)
    formData.append('year_built', values.year_Built)
    formData.append('security', values.security)
    formData.append('kid_safe', values.kid_safe)
    formData.append('parking', values.parking)
    formData.append('image_path', values.top_amenities)
    formData.append('amenities', values.amenities)
    formData.append('address', values.address)
    formData.append('city', values.city)
    formData.append('country', values.country)
    event.preventDefault()
    // if (
    //   !fileInput.current.files.length < 1 ||
    //   !previewUrl === '' ||
    //   !previewUrl === undefined
    // ) {
    //   formData.append('image_path', fileInput.current.files[0])
    // }
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    }
    axios
      .post('http://localhost:1055/api/properties', formData, config)
      .then((response) => {
        if (response.status === 422) {
        } else {
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
              />
              <TextField
                id="outlined-basic"
                type="number"
                onChange={handleinputchange}
                value={values.price}
                name="price"
                label="Whole Price"
                variant="outlined"
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
              />
              <TextField
                id="outlined-basic"
                type="number"
                onChange={handleinputchange}
                value={values.bath_main_house}
                name="bath_main_house"
                label="Bath for Main House"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                type="number"
                onChange={handleinputchange}
                value={values.bed_ADU}
                name="bed_ADU"
                label="Beds for ADU"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                type="number"
                onChange={handleinputchange}
                value={values.bath_ADU}
                name="bath_ADU"
                label="Bath for ADU"
                variant="outlined"
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
              />
              <TextField
                id="outlined-basic"
                onChange={handleinputchange}
                value={values.area_of_main_home}
                name="area_of_main_home"
                label="Area of Main home"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                onChange={handleinputchange}
                value={values.area_of_ADU}
                name="area_of_ADU"
                label="Area of ADU"
                variant="outlined"
              />
              <TextField
                id="outlined-number"
                // InputLabelProps={(shrink = true)}
                type="date"
                onChange={handleinputchange}
                value={values.year_Built}
                name="year_Built"
                label="Year Built"
                variant="outlined"
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
                value={values.kid_Safe}
                name="kid_Safe"
                label="Kid Safe"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                onChange={handleinputchange}
                value={values.parking}
                name="parking"
                label="Parking"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                onChange={handleinputchange}
                value={values.top_amenities}
                name="top_amenities"
                label="Top amenities"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                onChange={handleinputchange}
                value={values.amenities}
                name="amenities"
                label="Amenities"
                variant="outlined"
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
              />
              <TextField
                id="outlined-basic"
                onChange={handleinputchange}
                value={values.address}
                name="address"
                label="Address"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                onChange="handleinputchange"
                value="values.city"
                name="city"
                label="City"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                onChange={handleinputchange}
                value={values.country}
                name="country"
                label="Country"
                variant="outlined"
              />
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
          </form>
        </div>
      </div>
    </div>
  )

  // return
  // (
  // <div className="theme_container">
  //   <div
  //     // style={{
  //     //   paddingTop: pt,
  //     //   paddingBottom: pb,
  //     // }}
  //     className="get_started_container"
  //   >
  //     <h2>Add Properties</h2>
  //     <h1>Add Properties details</h1>
  //     <p>
  //       Take the next step to owning more property than you ever thought
  //       possible in your current stage of life. We're excited to help you build
  //       prosperity and share the wealth. We're here to support you all the way
  //       to make it happen.
  //     </p>
  //     <div className="get_started_inputs">

  //     </div>
  //   </div>
  // </div>
  // )
}
