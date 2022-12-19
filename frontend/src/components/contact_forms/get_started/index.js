import './index.css'
import Theme_Button from '../../general_components/button'
import { useState, useRef } from 'react'
import SpecialModal from '../../all_modals/icontact_from'
import axios from 'axios'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function Get_Started({ pt, pb }) {
  const [isError, setIsError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [checked, setChecked] = useState(false)
  const [isErrorMsg, setIsErrorMsg] = useState('')

  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    area: '',
  }
  const [values, setValues] = useState(initialValues)

  const defaultState = {
    fullName: false,
    email: false,
    phone: false,
    area: false,
    checked: false,
  }

  const [touched, setTouched] = useState(defaultState)

  const handleFocus = (e) => {
    let { fullName } = e.target
    setTouched({
      ...touched,
      [fullName]: true,
    })
  }
  const handleFocus2 = (e) => {
    setTouched({
      ...touched,
      email: true,
    })
  }
  const handleFocus3 = (e) => {
    setTouched({
      ...touched,
      phone: true,
    })
  }
  const handleFocus4 = (e) => {
    setTouched({
      ...touched,
      location: true,
    })
  }

  const handleFocus5 = (e) => {
    setTouched({
      ...touched,
      checked: true,
    })
  }

  const handleinputchange = (e) => {
    setIsErrorMsg('')
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const enteredFullNameIsValid = values.fullName.trim() !== ''
  const enteredEmailIsValid = values.email.trim() !== ''
  const enteredPhoneIsValid = values.phone.trim() !== ''
  const enteredAreaIsValid = values.area.trim() !== ''
  const enteredCheckedIsValid = checked !== false

  const fullNameInputIsInvalid =
    (!enteredFullNameIsValid && touched.fullName) ||
    (touched.email && !enteredFullNameIsValid) ||
    (touched.phone && !enteredFullNameIsValid) ||
    (touched.area && !enteredFullNameIsValid) ||
    (touched.checked && !enteredFullNameIsValid)

  const emailInputIsInvalid =
    (touched.email && !enteredEmailIsValid) ||
    (touched.phone && !enteredEmailIsValid) ||
    (touched.area && !enteredEmailIsValid) ||
    (touched.checked && !enteredEmailIsValid)

  const phoneInputIsInvalid =
    (touched.phone && !enteredPhoneIsValid) ||
    (touched.area && !enteredPhoneIsValid) ||
    (touched.checked && !enteredPhoneIsValid)

  const locationInputIsInvalid =
    (touched.area && !enteredAreaIsValid) ||
    (touched.checked && !enteredAreaIsValid)

  const checkedInputIsInvalid = touched.checked && !enteredCheckedIsValid

  const onSubmitHandler = (event) => {
    event.preventDefault()
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      area: true,
      checked: true,
    })

    if (
      !enteredFullNameIsValid ||
      !enteredEmailIsValid ||
      !enteredPhoneIsValid ||
      !enteredAreaIsValid ||
      !enteredCheckedIsValid
    ) {
      return
    }

    let data = {
      fullName: values.fullName,
      email: values.email,
      phone: values.phone,
      area: values.area,
    }

    axios
      .post('http://localhost:1055/api/contact/contact-us', data)
      .then((response) => {
        if (response.data.status === 200) {
          setSuccess(true)
          setValues(initialValues)
          setTouched(defaultState)
          setChecked(false)
        } else if (response.data.status === 422) {
          setIsError(response.data.message)
          setChecked(false)
          // setValues(initialValues)
          setTouched(defaultState)
        }
      })
      .catch((err) => {})
  }

  return (
    <div className="theme_container">
      <div
        style={{ paddingTop: pt, paddingBottom: pb }}
        className="get_started_container"
      >
        <h2>Get Started</h2>
        <h1>Find your Milenium Haus</h1>

        <p className="starting_p">
          Take the next step to owning more property than you ever thought
          possible in your current stage of life. We're excited to help you
          build prosperity and share the wealth. We're here to support you all
          the way to make it happen.
        </p>

        <div className="get_started_inputs">
          {isError ? (
            <p className="error_msg">Please fill all required fields.</p>
          ) : null}
          <Typography
            sx={{
              fontSize: '0.9rem',
              textAlign: 'center',
              color: 'red',
            }}
          >
            {' '}
            {isErrorMsg}
          </Typography>
          <form onSubmit={onSubmitHandler}>
            <div className="get_started_inputs_row">
              <div>
                <input
                  type={'text'}
                  name={'fullName'}
                  onChange={handleinputchange}
                  value={values.fullName}
                  onBlur={handleFocus}
                  placeholder="Full Name*"
                  required
                />
                {fullNameInputIsInvalid && (
                  <p className="e-message">Please enter a Full Name</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name={'email'}
                  onChange={handleinputchange}
                  value={values.email}
                  onBlur={handleFocus2}
                  placeholder="Email*"
                  required
                />
                {emailInputIsInvalid && (
                  <p className="e-message">Please enter a Email</p>
                )}
              </div>
            </div>

            <div className="get_started_inputs_row">
              <div>
                <input
                  type="number"
                  name={'phone'}
                  onChange={handleinputchange}
                  value={values.phone}
                  onBlur={handleFocus3}
                  placeholder="Phone*"
                  required
                />
                {phoneInputIsInvalid && (
                  <p className="e-message">Please enter a valid Phone</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name={'area'}
                  onChange={handleinputchange}
                  value={values.area}
                  onBlur={handleFocus4}
                  placeholder="Ideal Location*"
                  required
                />
                {locationInputIsInvalid && (
                  <p className="e-message">Please enter a Ideal Location</p>
                )}
              </div>
            </div>

            <div className="get_started_checkbox_row">
              <input
                onBlur={handleFocus5}
                value={checked}
                onChange={(e) => {
                  setChecked(!checked)
                }}
                readOnly
                type="checkbox"
                name="permission"
                required
                id="checkbox"
                checked={!checked ? false : true}
              />{' '}
              <label>
                I give Milenium Haus permission to contact me & agree to the{' '}
                <a href="">Term and Conditions.</a>
              </label>
            </div>
            {checkedInputIsInvalid && (
              <p className="e-message">Please enter a Ideal Location</p>
            )}
            <div className="gs_btn">
              <Button onClick={onSubmitHandler} variant="contained">
                Submit
              </Button>
            </div>
          </form>
          {success ? <SpecialModal redirect={'contact'} /> : null}
        </div>
      </div>
    </div>
  )
}
