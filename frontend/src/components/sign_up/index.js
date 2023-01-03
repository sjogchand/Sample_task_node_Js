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
import { Box } from '@mui/system'
import { MuiTelInput } from 'mui-tel-input'
// import { makeStyles } from '@material-ui/core/styles'

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
      phone: parseInt(phone),
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

  // const useStyles = makeStyles((theme) => ({
  //   input: {
  //     backgroundColor: '#fff',
  //   },
  // }))

  const phoneInput = (props, ref) => {
    // const classes = useStyles()

    return (
      <TextField
        {...props}
        style={{ width: '35%' }}
        className="sign_up_text_field"
        margin="normal"
        // InputProps={{
        //   className: classes.input,
        // }}
        inputRef={ref}
        fullWidth
        size="small"
        label="Phone Number"
        variant="outlined"
        name="phone"
        onBlur={handleFocus4}
        error={phoneInputIsInvalid}
        helperText={phoneInputIsInvalid ? 'Please enter valid email' : ' '}
      />
    )
  }

  return (
    <div className="theme_container">
      <div
        style={{ paddingTop: pt, paddingBottom: pb }}
        className="get_started_container"
      >
        <Typography
          component="h1"
          style={{
            margin: '0',
            fontWeight: '400',
            fontSize: '1.5rem',
            lineHeight: '1.334',
            letterSpacing: '0em',
            color:"#000",
            paddingBottom:"15px"
          }}
          variant="h5"
        >
          Sign Up
        </Typography>

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
            <Box className="input_row" style={{ textAlign: 'center' }}>
              <TextField
                className="sign_up_text_field"
                style={{ width: '35%' }}
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
              <TextField
                className="sign_up_text_field"
                style={{ width: '35%' }}
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
            </Box>
            <Box
              className="input_row"
              style={{
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <TextField
                className="sign_up_text_field"
                margin="normal"
                style={{ width: '35%' }}
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
              <MuiTelInput
                style={{ width: '35%', marginTop: 15 }}
                defaultCountry={'US'}
                placeholder="Enter phone number"
                value={phone}
                onChange={(e)=>{
                  setPhone(e?.split('+')[1])
                }}
                onBlur={handleFocus4}
                error={phoneInputIsInvalid}
                helperText={
                  phoneInputIsInvalid ? 'Please enter valid Phone' : ' '
                }
                maxRows={10}
              />
              {/* <PhoneInput
                style={{ width: '35%' }}
                // country={'us'}
                // onChange={(e) => {
                //   setPhone(e)
                // }}
                // name={'phone'}
                // value={phone}
                placeholder="Enter phone number"
                value={phone}
                onChange={setPhone}
                inputComponent={phoneInput}
                // onBlur={handleFocus4}
                // error={emailInputIsInvalid}
                // helperText={
                //   emailInputIsInvalid ? 'Please enter valid email' : ' '
                // }
                // placeholder="Phone*"
              /> */}
              {/* {phoneInputIsInvalid && (
                <p className="e-message">Please enter valid Phone</p>
              )} */}
            </Box>
            <Box className="input_row" style={{ textAlign: 'center' }}>
              {' '}
              <TextField
                className="sign_up_text_field"
                style={{ width: '35%' }}
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
              <TextField
                style={{ width: '35%' }}
                className="sign_up_text_field"
                margin="normal"
                type={'password'}
                required
                label="Confirm Password"
                name="conf_password"
                value={values.conf_password}
                onBlur={handleFocus6}
                error={confirmPasswordInputIsInvalid}
                onChange={handleinputchange}
                helperText={
                  confirmPasswordInputIsInvalid
                    ? 'Please enter confirm password'
                    : ' '
                }
              />
              {!confirmPassword &&
                values.password !== '' &&
                values.conf_password !== '' && (
                  <p className="e-message">Password not matched</p>
                )}
            </Box>
            <Box className="input_row" style={{ textAlign: 'center' }}>
              {' '}
              <TextField
                style={{ width: '35%' }}
                className="sign_up_text_field"
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
              <TextField
                style={{ width: '35%' }}
                className="sign_up_text_field"
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
            </Box>

            <Box className="input_row" style={{ textAlign: 'center' }}>
              <TextField
                style={{ width: '35%' }}
                className="sign_up_text_field"
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

              <TextField
                style={{ width: '35%' }}
                className="sign_up_text_field"
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
            </Box>
            <div className="gs_btn">
              <Button
                className="sign_up_submit"
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onSubmitHandler}
              >
                Sign Up
              </Button>
              <Grid
                container
                style={{
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <Grid item>
                  <HashLink lassName="sign_up_submit" smooth to={'/sign-in'}>
                    {'Already have an account? Sign In'}
                  </HashLink>
                </Grid>
              </Grid>
            </div>
          </form>
          {success ? <SpecialModal redirect={'sign-in'} /> : null}
        </div>
      </div>
    </div>
  )
}
