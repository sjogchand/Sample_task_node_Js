import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
  useLocation,
} from 'react-router-dom'

import ScrollToTop from './scrollToTop'

import Home from '../pages/home'
import Learn from '../pages/learn'
import Access from '../pages/access'
import Contact from '../pages/contact'
import SignUp from '../pages/sign_up'
import Listing from '../pages/listing'
import Owner from '../pages/tic_ownership'
import PropertyDetails from '../pages/property_detail'
import Response from '../pages/post_response'
import AddProperty from '../pages/add_property'
import PrivacyPolicy from '../pages/privacy_policy'
import TermsAndCondition from '../pages/terms_and_condition'
import ManageProperties from '../pages/manage_properties'
import EditProperty from '../pages/edit_property'
import SignIn from '../pages/sign_in'

function PrivateRoutes({ children }) {
  // const authed = localStorage.getItem('access_token')
  const role = localStorage.getItem('role')
  const location = useLocation()

  return parseInt(role) === 1 ? (
    children
  ) : (
    <Navigate to="/" replace state={{ path: location.pathname }} />
  )
}

function PublicRoutes({ children }) {
  const authed = localStorage.getItem('access_token')
  return authed ? <Navigate to="/" /> : children
}

function AppRouter() {
  return (
    // <Router>
    // <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/access" element={<Access />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thankyou" element={<Response />} />
      <Route
        path="/sign-up"
        element={
          <PublicRoutes>
            <SignUp />
          </PublicRoutes>
        }
      />
      <Route
        path="/sign-in"
        element={
          <PublicRoutes>
            <SignIn />
          </PublicRoutes>
        }
      />
      <Route path="/listing" element={<Listing />} />
      <Route path="/ownership" element={<Owner />} />
      <Route
        path="/add-property"
        element={
          <PrivateRoutes>
            <AddProperty />
          </PrivateRoutes>
        }
      />
      <Route path="/property-detail" element={<PropertyDetails />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
      <Route
        path="/manage-property"
        element={
          <PrivateRoutes>
            <ManageProperties />
          </PrivateRoutes>
        }
      />
      <Route
        path="/edit-property"
        element={
          <PrivateRoutes>
            <EditProperty />
          </PrivateRoutes>
        }
      />
    </Routes>
    // </Router>
  )
}

export default AppRouter
