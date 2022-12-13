import Faq from "../components/faq";
import Footer from "../components/footer";
import Get_Started from "../components/contact_forms/get_started";
import SecondNavbar from "../components/second_navbar";
import TIC_Faq from "../components/tic_coownership_faq";
import Tic_Cover from "../components/tic_ownership";
import { Helmet } from 'react-helmet-async';

export default function Tic_Co_OwnerShip() {
    return (
        <div>
            <Helmet>
                <title>Milenium Haus | TIC Co-ownership </title>
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
            <Tic_Cover />
            <TIC_Faq />
            <Faq />
            <Get_Started pt={"121px"} pb={'86px'} />
            <Footer />
        </div>
    );
}
