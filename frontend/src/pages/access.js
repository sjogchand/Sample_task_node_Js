import AccessCover from "../components/acces_cover";
import Advantage from "../components/advantage";
import Footer from "../components/footer";
import HowWorks from "../components/how_works";
import SecondNavbar from "../components/second_navbar";
import Timeline from "../components/timeline";
import { Helmet } from 'react-helmet-async';


export default function Access() {
    return (
        <div>
            <Helmet>
                <title>Milenium Haus | Access </title>
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
            <AccessCover />
            <Advantage />
            <HowWorks />
            <Timeline />
            <Footer />
        </div>
    );
}
