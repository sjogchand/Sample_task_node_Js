import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import ScrollToTop from "./scrollToTop";


import Home from "../pages/home";
import Learn from "../pages/learn";
import Access from "../pages/access";
import Contact from "../pages/contact";
import Sign from "../pages/signup";
import Listing from "../pages/listing";
import Owner from "../pages/tic_ownership";
import PropertyDetails from "../pages/property-detail";
import Response from "../pages/post_response";
import AddProperty from "../pages/add-property";


function AppRouter() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/access" element={<Access />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/thankyou" element={<Response/>} />
                <Route path="/signup" element={<Sign />} />
                <Route path="/listing" element={<Listing />} />
                <Route path="/ownership" element={<Owner />} />
                <Route path="/add-property" element={<AddProperty />} />
                <Route path="/property-detail" element={<PropertyDetails />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;