import Articles from "../components/articles";
import Footer from "../components/footer";
import SecondNavbar from "../components/second_navbar";
import { Helmet } from 'react-helmet-async';
import ListingCover from "../components/listing_cover";
import Get_Started from "../components/contact_forms/get_started";


export default function Listing() {
    return (
        <div>
            <Helmet>
                <title>Milenium Haus | Listing </title>
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
            <ListingCover />
            <Articles />
            <Get_Started pt={"109px"} pb={'53px'} />
            <Footer />
        </div>
    );
}
