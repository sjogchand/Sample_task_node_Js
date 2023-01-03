import './index.css'
import Theme_Button from '../general_components/button'
import { useState, useRef } from 'react'
import SpecialModal from '../all_modals/icontact_from'
import axios from 'axios'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import PhoneInput from 'react-phone-input-2'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { HashLink } from 'react-router-hash-link'

export default function SignUpForm({ pt, pb }) {
  const [isError, setIsError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [phone, setPhone] = useState('')
  const [isErrorMsg, setIsErrorMsg] = useState('')

  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    conf_password: '',
    phone: '',
    address: '',
    state: '',
    country: '',
    zip: '',
  }
  const [values, setValues] = useState(initialValues)

  const defaultState = {
    first_name: false,
    last_name: false,
    email: false,
    password: false,
    conf_password: false,
    phone: false,
    address: false,
    state: false,
    country: false,
    zip: false,
  }

  const [touched, setTouched] = useState(defaultState)

  const handleFocus = (e) => {
    let { first_name } = e.target
    setTouched({
      ...touched,
      [first_name]: true,
    })
  }
  const handleFocus2 = (e) => {
    setTouched({
      ...touched,
      last_name: true,
    })
  }
  const handleFocus3 = (e) => {
    setTouched({
      ...touched,
      email: true,
    })
  }
  const handleFocus4 = (e) => {
    setTouched({
      ...touched,
      phone: true,
    })
  }

  const handleFocus5 = (e) => {
    setTouched({
      ...touched,
      password: true,
    })
  }

  const handleFocus6 = (e) => {
    setTouched({
      ...touched,
      conf_password: true,
    })
  }

  const handleFocus7 = (e) => {
    setTouched({
      ...touched,
      address: true,
    })
  }

  const handleFocus8 = (e) => {
    setTouched({
      ...touched,
      state: true,
    })
  }

  const handleFocus9 = (e) => {
    setTouched({
      ...touched,
      country: true,
    })
  }

  const handleFocus10 = (e) => {
    setTouched({
      ...touched,
      zip: true,
    })
  }

  const handleinputchange = (e) => {
    setIsErrorMsg('')
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const enteredFirstNameValid = values.first_name.trim() !== ''
  const enteredLastNameValid = values.last_name.trim() !== ''
  const enteredEmailIsValid =
    values.email.trim() !== '' &&
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  const enteredPhoneIsValid = phone.trim() !== ''
  const enteredPasswordIsValid = values.password.trim() !== ''
  const enteredConfirmPasswordIsValid = values.conf_password.trim() !== ''
  const enteredAdresssIsValid = values.address.trim() !== ''
  const enteredStateIsValid = values.state.trim() !== ''
  const enteredCountryIsValid = values.country.trim() !== ''
  const enteredZipIsValid = values.zip.trim() !== ''

  const confirmPassword = values.password === values.conf_password

  const firstNameInputIsInvalid =
    (!enteredFirstNameValid && touched.first_name) ||
    (touched.last_name && !enteredFirstNameValid) ||
    (touched.email && !enteredFirstNameValid) ||
    (touched.phone && !enteredFirstNameValid) ||
    (touched.password && !enteredFirstNameValid) ||
    (touched.conf_password && !enteredFirstNameValid) ||
    (touched.address && !enteredFirstNameValid) ||
    (touched.state && !enteredFirstNameValid) ||
    (touched.country && !enteredFirstNameValid) ||
    (touched.zip && !enteredFirstNameValid)

  const lastNameInputIsInvalid =
    (touched.last_name && !enteredLastNameValid) ||
    (touched.email && !enteredLastNameValid) ||
    (touched.phone && !enteredLastNameValid) ||
    (touched.password && !enteredLastNameValid) ||
    (touched.conf_password && !enteredLastNameValid) ||
    (touched.address && !enteredLastNameValid) ||
    (touched.state && !enteredLastNameValid) ||
    (touched.country && !enteredLastNameValid) ||
    (touched.zip && !enteredLastNameValid)

  const emailInputIsInvalid =
    (touched.email && !enteredEmailIsValid) ||
    (touched.phone && !enteredEmailIsValid) ||
    (touched.password && !enteredEmailIsValid) ||
    (touched.conf_password && !enteredEmailIsValid) ||
    (touched.address && !enteredEmailIsValid) ||
    (touched.state && !enteredEmailIsValid) ||
    (touched.country && !enteredEmailIsValid) ||
    (touched.zip && !enteredEmailIsValid)

  const phoneInputIsInvalid =
    (touched.phone && !enteredPhoneIsValid) ||
    (touched.password && !enteredPhoneIsValid) ||
    (touched.conf_password && !enteredPhoneIsValid) ||
    (touched.address && !enteredPhoneIsValid) ||
    (touched.state && !enteredPhoneIsValid) ||
    (touched.country && !enteredPhoneIsValid) ||
    (touched.zip && !enteredPhoneIsValid)

  const passwordInputIsInvalid =
    (touched.password && !enteredPasswordIsValid) ||
    (touched.conf_password && !enteredPasswordIsValid) ||
    (touched.address && !enteredPasswordIsValid) ||
    (touched.state && !enteredPasswordIsValid) ||
    (touched.country && !enteredPasswordIsValid) ||
    (touched.zip && !enteredPasswordIsValid)

  const confirmPasswordInputIsInvalid =
    (touched.conf_password && !enteredConfirmPasswordIsValid) ||
    (touched.address && !enteredConfirmPasswordIsValid) ||
    (touched.state && !enteredConfirmPasswordIsValid) ||
    (touched.country && !enteredConfirmPasswordIsValid) ||
    (touched.zip && !enteredConfirmPasswordIsValid)

  const addressInputIsInvalid =
    (touched.address && !enteredAdresssIsValid) ||
    (touched.state && !enteredAdresssIsValid) ||
    (touched.country && !enteredAdresssIsValid) ||
    (touched.zip && !enteredAdresssIsValid)

  const stateInputIsInvalid =
    (touched.state && !enteredStateIsValid) ||
    (touched.country && !enteredStateIsValid) ||
    (touched.zip && !enteredStateIsValid)

  const countryInputIsInvalid =
    (touched.country && !enteredCountryIsValid) ||
    (touched.zip && !enteredCountryIsValid)

  const zipInputIsInvalid = touched.zip && !enteredZipIsValid

  const onSubmitHandler = (event) => {
    event.preventDefault()
    setTouched({
      first_name: true,
      last_name: true,
      email: true,
      password: true,
      conf_password: true,
      phone: true,
      address: true,
      state: true,
      country: true,
      zip: true,
    })

    if (
      !enteredFirstNameValid ||
      !enteredLastNameValid ||
      !enteredEmailIsValid ||
      !enteredPhoneIsValid ||
      !enteredPasswordIsValid ||
      !enteredConfirmPasswordIsValid ||
      !enteredAdresssIsValid ||
      !enteredStateIsValid ||
      !enteredCountryIsValid ||
      !enteredZipIsValid
    ) {
      return
    }

    let data = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
      phone: phone,
      address: values.address,
      state: values.state,
      country: values.country,
      zip: values.zip,
    }

    console.log(data, 'sss')

    axios
      .post('http://localhost:1055/api/users/register', data)
      .then((response) => {
        if (response.data.status === 200) {
          setSuccess(true)
          setValues(initialValues)
          setTouched(defaultState)
          setPhone('')
        } else if (response.data.status === 422) {
          setIsError(response.data.message)
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
        <h2>Get Starteds</h2>
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
                <TextField
                  margin="normal"
                  type={'text'}
                  required
                  label="First Name"
                  name="first_name"
                  value={values.first_name}
                  onBlur={handleFocus}
                  error={firstNameInputIsInvalid}
                  onChange={handleinputchange}
                  helperText={
                    firstNameInputIsInvalid ? 'Please enter First Name' : ' '
                  }
                />
                {/* <input
                  type={'text'}
                  name={'first_name'}
                  onChange={handleinputchange}
                  value={values.first_name}
                  onBlur={handleFocus}
                  placeholder="First Name*"
                  required
                />
                {firstNameInputIsInvalid && (
                  <p className="e-message">Please enter First Name</p>
                )} */}
              </div>
              <div>
                <TextField
                  margin="normal"
                  type={'text'}
                  required
                  label="Last Name"
                  name="last_name"
                  value={values.last_name}
                  onBlur={handleFocus2}
                  error={lastNameInputIsInvalid}
                  onChange={handleinputchange}
                  helperText={
                    lastNameInputIsInvalid ? 'Please enter Last Name' : ' '
                  }
                />
                {/* <input
                  type="email"
                  name={'last_name'}
                  onChange={handleinputchange}
                  value={values.last_name}
                  onBlur={handleFocus2}
                  placeholder="Last Name"
                  required
                />
                {lastNameInputIsInvalid && (
                  <p className="e-message">Please enter Last Name</p>
                )} */}
              </div>
            </div>

            <div className="get_started_inputs_row">
              <div>
                <TextField
                  margin="normal"
                  type={'email'}
                  required
                  label="Email"
                  name="email"
                  value={values.email}
                  onBlur={handleFocus3}
                  error={emailInputIsInvalid}
                  onChange={handleinputchange}
                  helperText={
                    emailInputIsInvalid ? 'Please enter valid email' : ' '
                  }
                />
                {/* <input
                  type={'text'}
                  name={'email'}
                  onChange={handleinputchange}
                  value={values.email}
                  onBlur={handleFocus3}
                  placeholder="email*"
                  required
                />
                {emailInputIsInvalid && (
                  <p className="e-message">Please enter valid email</p>
                )} */}
              </div>
              <div>
                <PhoneInput
                  country={'us'}
                  onChange={(e) => {
                    setPhone(e)
                  }}
                  name={'phone'}
                  value={phone}
                  onBlur={handleFocus4}
                  placeholder="Phone*"
                />
                {phoneInputIsInvalid && (
                  <p className="e-message">Please enter valid Phone</p>
                )}
              </div>
            </div>

            <div className="get_started_inputs_row">
              <div>
                <TextField
                  margin="normal"
                  type={'password'}
                  required
                  label="Password"
                  name="password"
                  value={values.password}
                  onBlur={handleFocus5}
                  error={passwordInputIsInvalid}
                  onChange={handleinputchange}
                  helperText={
                    passwordInputIsInvalid ? 'Please enter password' : ' '
                  }
                />

                {/* <input
                  type="password"
                  name={'password'}
                  onChange={handleinputchange}
                  value={values.password}
                  onBlur={handleFocus5}
                  placeholder="Password*"
                  required
                />
                {passwordInputIsInvalid && (
                  <p className="e-message">Please enter password</p>
                )} */}
              </div>
              <div>
                <TextField
                  margin="normal"
                  type={'password'}
                  required
                  label="Confirm Password"
                  name="conf_password"
                  value={values.conf_password}
                  onBlur={handleFocus6}
                  error={emailInputIsInvalid}
                  onChange={handleinputchange}
                  helperText={
                    emailInputIsInvalid ? 'Please enter valid email' : ' '
                  }
                />
                {/* <input
                  type="password"
                  name={'conf_password'}
                  onChange={handleinputchange}
                  value={values.conf_password}
                  onBlur={handleFocus6}
                  placeholder="Confirm Passowrd*"
                  required
                />
                {confirmPasswordInputIsInvalid && (
                  <p className="e-message">Please enter confirm password</p>
                )} */}
                {!confirmPassword &&
                  values.password !== '' &&
                  values.conf_password !== '' && (
                    <p className="e-message">Password not matched</p>
                  )}
              </div>
            </div>

            <div className="get_started_inputs_row">
              <div>
                <TextField
                  margin="normal"
                  type={'text'}
                  required
                  label="Address"
                  name="address"
                  value={values.address}
                  onBlur={handleFocus7}
                  error={addressInputIsInvalid}
                  onChange={handleinputchange}
                  helperText={
                    addressInputIsInvalid ? 'Please enter address' : ' '
                  }
                />
                {/* <input
                  type={'text'}
                  name={'address'}
                  onChange={handleinputchange}
                  value={values.address}
                  onBlur={handleFocus7}
                  placeholder="Address*"
                  required
                />
                {addressInputIsInvalid && (
                  <p className="e-message">Please enter address</p>
                )} */}
              </div>
              <div>
                <TextField
                  margin="normal"
                  type={'text'}
                  required
                  label="State"
                  name="state"
                  value={values.state}
                  onBlur={handleFocus8}
                  error={stateInputIsInvalid}
                  onChange={handleinputchange}
                  helperText={stateInputIsInvalid ? 'Please enter state' : ' '}
                />
                {/* <input
                  type={'text'}
                  name={'state'}
                  onChange={handleinputchange}
                  value={values.state}
                  onBlur={handleFocus8}
                  placeholder="state*"
                  required
                />
                {stateInputIsInvalid && (
                  <p className="e-message">Please enter state</p>
                )} */}
              </div>
            </div>

            <div className="get_started_inputs_row">
              <div>
                <TextField
                  margin="normal"
                  type={'text'}
                  required
                  label="Country"
                  name="country"
                  value={values.country}
                  onBlur={handleFocus9}
                  error={countryInputIsInvalid}
                  onChange={handleinputchange}
                  helperText={
                    countryInputIsInvalid ? 'Please enter country' : ' '
                  }
                />
                {/* <input
                  type={'text'}
                  name={'country'}
                  onChange={handleinputchange}
                  value={values.country}
                  onBlur={handleFocus9}
                  placeholder="Country*"
                  required
                />
                {countryInputIsInvalid && (
                  <p className="e-message">Please enter country</p>
                )} */}
              </div>
              <div>
                <TextField
                  margin="normal"
                  type={'text'}
                  required
                  label="Zip"
                  name="zip"
                  value={values.zip}
                  onBlur={handleFocus10}
                  error={zipInputIsInvalid}
                  onChange={handleinputchange}
                  helperText={zipInputIsInvalid ? 'Please enter country' : ' '}
                />
                {/* <input
                  type={'text'}
                  name={'zip'}
                  onChange={handleinputchange}
                  value={values.zip}
                  onBlur={handleFocus10}
                  placeholder="zip*"
                  required
                />
                {zipInputIsInvalid && (
                  <p className="e-message">Please enter zip</p>
                )} */}
              </div>
            </div>
            <div className="gs_btn">
              <Button
                className="sign_up_submit"
                type="submit"
                // fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onSubmitHandler}
                // variant="contained"
              >
                Sign Up
              </Button>
              <Grid container>
                {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
                <Grid item>
                  <HashLink smooth to={'/signup'}>
                    {"Don't have an account? Sign Up"}
                  </HashLink>
                </Grid>
              </Grid>
            </div>
          </form>
          {success ? <SpecialModal redirect={'contact'} /> : null}
        </div>
      </div>
    </div>
  )
}

// import './index.css'
// import img1 from '../../assets/images/b_1.png'
// import img2 from '../../assets/images/b_2.png'
// import img3 from '../../assets/images/b_3.png'
// import Theme_Buttom from '../general_components/button'

// export default function SignUpOld() {
//   return (
//     <div className="signup_container_bg theme_container">
//       <div className="signup_container">
//         <div className="signup_content">
//           <h1>Milenium Haus Access</h1>
//           <p>A one-time program fee of</p>
//           <div className="signup_button">
//             <Theme_Buttom text={'$97 or $9/month'} />
//           </div>
//         </div>
//         <div className="benefit_wrapper">
//           <div className="benefit_heading">
//             <h2>Benefits</h2>
//           </div>
//           <div className="benefit_container">
//             <div className="benefit_sub_container">
//               <img src={img1} alt="" />
//               <p>First look into new listings</p>
//             </div>
//             <div className="benefit_sub_container">
//               <img src={img2} alt="" />
//               <p>Get alerts for the best opportunities</p>
//             </div>
//             <div className="benefit_sub_container">
//               <img src={img3} alt="" />
//               <p>$2,500-$10,000 closing credit</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
