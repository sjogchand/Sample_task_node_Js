import Footer from "../components/footer";
import Form from "../components/contact_forms/signup_form";
import SecondNavbar from "../components/second_navbar";
import AddPropertyForm from "../components/property/add-property";
import { Helmet } from 'react-helmet-async';

export default function AddProperty() {
    return (
        <div>
            <SecondNavbar />
            <AddPropertyForm pb={'95px'} pt='85px' />
            <Footer />
        </div>
    );
}
