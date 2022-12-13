import Footer from "../components/footer";
import Get_Started from "../components/contact_forms/get_started";
import SecondNavbar from "../components/second_navbar";
import { Helmet} from 'react-helmet-async';

export default function Contact() {
    return (
        <div>
            <Helmet>
                <title>Milenium Haus | Contact</title>
                <meta
                    name="keywords"
                    content="Milenium Haus"
                />
                <meta
                    name="description"
                    content="Milenium Haus"
                />
            </Helmet>
            <SecondNavbar />
            <Get_Started pt={"205px"} pb={'137px'} />
            <Footer />
        </div>
    );
}
