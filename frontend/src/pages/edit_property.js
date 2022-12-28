import Footer from '../components/footer'
import Form from '../components/contact_forms/signup_form'
import SecondNavbar from '../components/second_navbar'
import { Helmet } from 'react-helmet-async'
import EditPropertyForm from '../components/property/edit_property'

export default function EditProperty() {
  return (
    <div>
      <SecondNavbar />
      <EditPropertyForm pb={'95px'} pt="85px" />
      <Footer />
    </div>
  )
}
