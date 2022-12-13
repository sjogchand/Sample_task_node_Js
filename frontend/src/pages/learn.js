import Community from "../components/community";
import Faq from "../components/faq";
import Footer from "../components/footer";
import HomeOwner from "../components/home owner";
import LearnCover from "../components/learn_cover";
import Handle from "../components/learn_handle";
import NewHome from "../components/new_home";
import OwnerShip from "../components/ownership";
import Rent from "../components/rent";
import SecondNavbar from "../components/second_navbar";
import { Helmet } from 'react-helmet-async';


export default function Learn() {
    return (
        <div>
            <Helmet>
                <title>Milenium Haus | Learn </title>
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
            <LearnCover />
            <HomeOwner display_button={false} />
            <OwnerShip btn_link={"/ownership"} />
            <NewHome />
            <Rent />
            <Handle />
            <Community />
            <Faq />
            <Footer />
        </div>
    );
}
