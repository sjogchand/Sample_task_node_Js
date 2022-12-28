import Footer from "../components/footer";
import Get_Started from "../components/contact_forms/get_started";
import Move from "../components/move_section";
import OwnerShip from "../components/ownership";
import Property_Details from "../components/property_detail";
import SecondNavbar from "../components/second_navbar";
import { Helmet } from 'react-helmet-async';


export default function PropertyDetails() {
    return (
        <div>
            <Helmet>
                <title>Milenium Haus | Property Detail </title>
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
            <Property_Details />
            <Move />
            <OwnerShip btn_link={"/ownership"}/>
            <Get_Started pt={"111px"} pb={"46px"}/>
            <Footer />
        </div>
    );
}
