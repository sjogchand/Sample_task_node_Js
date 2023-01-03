import Footer from '../components/footer'
import SecondNavbar from '../components/second_navbar'
import SignInForm from '../components/sign_in/index'
import { Helmet } from 'react-helmet-async'

export default function SignIn() {
  return (
    <div>
      <Helmet>
        <title>Milenium Haus | Signup </title>
        <meta name="keywords" content="comma seperated value" />
        <meta name="description" content="Milenium Haus" />
      </Helmet>
      <SecondNavbar />
      <SignInForm pb={'95px'} pt="85px" />
      <Footer />
    </div>
  )
}
