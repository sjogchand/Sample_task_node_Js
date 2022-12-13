import Chance from "../components/contact_forms/chance";
import Cover from "../components/cover";
import Faq from "../components/faq";
import Footer from "../components/footer";
import HomeOwner from "../components/home owner";
import Navbar from "../components/navbar";
import NewHome from "../components/new_home";
import OwnerShip from "../components/ownership";
import Partners from "../components/partners";
import Rent from "../components/rent";
import { Helmet} from 'react-helmet-async';

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Milenium Haus</title>
                <meta
                    name="keywords"
                    content="Milenium Haus"
                />
                <meta
                    name="description"
                    content="Milenium Haus"
                />
            </Helmet>
            <Navbar />
            <Cover />
            <HomeOwner display_button={true} />
            <OwnerShip btn_link={"/learn"} />
            <NewHome />
            <Rent />
            <Chance />
            <Faq />
            <Partners />
            <Footer />
        </div>
    );
}
