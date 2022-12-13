import PostResponse from "../components/contact_post_response";
import Footer from "../components/footer";
import SecondNavbar from "../components/second_navbar";
import { Helmet } from 'react-helmet-async';



export default function Response() {
    return (
        <div>
            <Helmet>
                <title>Milenium Haus</title>
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
            <PostResponse />
            <Footer />
        </div>
    );
}
