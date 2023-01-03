import './index.css'
import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { HashLink } from 'react-router-hash-link'

import { useState } from 'react'
import SpecialModal from '../all_modals/icontact_from'
import axios from 'axios'
import { setLoginData } from './../../actions/loginAction'
import { useDispatch } from 'react-redux'

const theme = createTheme()

export default function SignIn() {
  const [isError, setIsError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [isErrorMsg, setIsErrorMsg] = useState('')
  const dispatch = useDispatch()

  const initialValues = {
    email: '',
    password: '',
  }
  const [values, setValues] = useState(initialValues)

  const defaultState = {
    email: false,
    password: false,
  }

  const [touched, setTouched] = useState(defaultState)

  const handleFocus = (e) => {
    setTouched({
      ...touched,
      email: true,
    })
  }
  const handleFocus2 = (e) => {
    setTouched({
      ...touched,
      password: true,
    })
  }

  const handleinputchange = (e) => {
    setIsErrorMsg('')
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const enteredEmailIsValid =
    values.email.trim() !== '' &&
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  const enteredPasswordIsValid = values.password.trim() !== ''

  const emailInputIsInvalid =
    (touched.email && !enteredEmailIsValid) ||
    (touched.password && !enteredEmailIsValid)

  const passwordInputIsInvalid = touched.password && !enteredPasswordIsValid

  const onSubmitHandler = (event) => {
    event.preventDefault()
    setTouched({
      email: true,
      password: true,
    })

    if (!enteredEmailIsValid || !enteredPasswordIsValid) {
      return
    }

    let data = {
      email: values.email,
      password: values.password,
    }
    axios
      .post('http://localhost:1055/api/users/login', data)
      .then((response) => {
        if (response.data.status === 200) {
          // console.log(response.data,"sss")
          dispatch(setLoginData(response.data))
          localStorage.setItem('access_token', response.data.access_token)
          localStorage.setItem('role', response.data.role)
          setSuccess(true)
          setValues(initialValues)
          setTouched(defaultState)
        } else if (response.data.status === 422) {
          setIsError(response.data.message)
          setTouched(defaultState)
        }
      })
      .catch((err) => {})
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Typography>
            {isError ? (
              <p className="error_msg">Please fill all required fields.</p>
            ) : null}
          </Typography>
          <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <form onSubmit={onSubmitHandler}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={values.email}
                autoComplete="email"
                autoFocus
                onBlur={handleFocus}
                error={emailInputIsInvalid}
                onChange={handleinputchange}
                helperText={
                  emailInputIsInvalid ? 'Please enter a valid email' : ' '
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={values.password}
                autoComplete="current-password"
                onBlur={handleFocus2}
                error={passwordInputIsInvalid}
                onChange={handleinputchange}
                helperText={
                  passwordInputIsInvalid ? 'Please enter right password' : ' '
                }
              />
              {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onSubmitHandler}
              >
                Sign In
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
                {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
                <Grid item>
                  <HashLink smooth to={'/sign-up'}>
                    {"Don't have an account? Sign Up"}
                  </HashLink>
                </Grid>
              </Grid>
            </form>
            {success ? <SpecialModal redirect={''} /> : null}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

// import './index.css'
// import Theme_Button from '../general_components/button'
// import { useState, useRef } from 'react'
// import SpecialModal from '../all_modals/icontact_from'
// import axios from 'axios'
// import Button from '@mui/material/Button'
// import Typography from '@mui/material/Typography'
// import PhoneInput from 'react-phone-input-2'

// export default function SignInForm({ pt, pb }) {
//   const [isError, setIsError] = useState(false)
//   const [success, setSuccess] = useState(false)
//   const [isErrorMsg, setIsErrorMsg] = useState('')

//   const initialValues = {
//     email: '',
//     password: '',
//   }
//   const [values, setValues] = useState(initialValues)

//   const defaultState = {
//     email: false,
//     password: false,
//   }

//   const [touched, setTouched] = useState(defaultState)

//   const handleFocus = (e) => {
//     let { first_name } = e.target
//     setTouched({
//       ...touched,
//       [first_name]: true,
//     })
//   }
//   const handleFocus2 = (e) => {
//     setTouched({
//       ...touched,
//       last_name: true,
//     })
//   }

//   const handleinputchange = (e) => {
//     setIsErrorMsg('')
//     const { name, value } = e.target
//     setValues({ ...values, [name]: value })
//   }

//   const enteredEmailIsValid =
//     values.email.trim() !== '' &&
//     /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//   const enteredPasswordIsValid = values.password.trim() !== ''

//   const emailInputIsInvalid =
//     (touched.email && !enteredEmailIsValid) ||
//     (touched.password && !enteredEmailIsValid)

//   const passwordInputIsInvalid = touched.password && !enteredPasswordIsValid

//   const onSubmitHandler = (event) => {
//     event.preventDefault()
//     setTouched({
//       email: true,
//       password: true,
//     })

//     if (!enteredEmailIsValid || !enteredPasswordIsValid) {
//       return
//     }

//     let data = {
//       email: values.email,
//       password: values.password,
//     }

//     console.log(data, 'sss')

//     axios
//       .post('http://localhost:1055/api/users/register', data)
//       .then((response) => {
//         if (response.data.status === 200) {
//           setSuccess(true)
//           setValues(initialValues)
//           setTouched(defaultState)
//         } else if (response.data.status === 422) {
//           setIsError(response.data.message)
//           setTouched(defaultState)
//         }
//       })
//       .catch((err) => {})
//   }

//   return (
//     <div className="theme_container">
//       <div
//         style={{ paddingTop: pt, paddingBottom: pb }}
//         className="get_started_container"
//       >
//         <h2>Get Started</h2>
//         <h1>Find your Milenium Haus</h1>

//         <p className="starting_p">
//           Take the next step to owning more property than you ever thought
//           possible in your current stage of life. We're excited to help you
//           build prosperity and share the wealth. We're here to support you all
//           the way to make it happen.
//         </p>

//         <div className="get_started_inputs">
//           {isError ? (
//             <p className="error_msg">Please fill all required fields.</p>
//           ) : null}
//           <Typography
//             sx={{
//               fontSize: '0.9rem',
//               textAlign: 'center',
//               color: 'red',
//             }}
//           >
//             {' '}
//             {isErrorMsg}
//           </Typography>
//           <form onSubmit={onSubmitHandler}>
//             <div className="get_started_inputs_row">
//               <div>
//                 <input
//                   type={'text'}
//                   name={'email'}
//                   onChange={handleinputchange}
//                   value={values.email}
//                   onBlur={handleFocus}
//                   placeholder="Email*"
//                   required
//                 />
//                 {emailInputIsInvalid && (
//                   <p className="e-message">Please enter valid email</p>
//                 )}
//               </div>
//               <div>
//                 <input
//                   type="password"
//                   name={'password'}
//                   onChange={handleinputchange}
//                   value={values.password}
//                   onBlur={handleFocus2}
//                   placeholder="Password"
//                   required
//                 />
//                 {passwordInputIsInvalid && (
//                   <p className="e-message">Please enter password</p>
//                 )}
//               </div>
//             </div>

//             <div className="gs_btn">
//               <p>New user register here</p>
//               <Button
//                 className="sign_in_button"
//                 onClick={onSubmitHandler}
//                 variant="contained"
//               >
//                 Sign In
//               </Button>
//             </div>
//           </form>
//           {success ? <SpecialModal redirect={'/'} /> : null}
//         </div>
//       </div>
//     </div>
//   )
// }
