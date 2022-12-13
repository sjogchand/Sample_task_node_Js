import Footer from "../components/footer";
import Form from "../components/contact_forms/signup_form";
import SecondNavbar from "../components/second_navbar";
import SignUp from "../components/sign_up";
import { Helmet } from 'react-helmet-async';

export default function Sign() {
    return (
        <div>
            <Helmet>
                <title>Milenium Haus | Signup </title>
                <meta
                    name="keywords"
                    content="comma seperated value"
                />
                <meta
                    name="description"
                    content="Milenium Haus"
                />
            </Helmet>
            <SecondNavbar />
            <SignUp />
            <Form pb={'95px'} pt='85px' />
            <Footer />
        </div>
    );
}
