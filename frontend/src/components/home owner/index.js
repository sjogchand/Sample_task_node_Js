import "./index.css"
import img1 from "../../assets/images/shop.png"
import img2 from "../../assets/images/own.png"
import img3 from "../../assets/images/enjoy.png"
import Theme_Buttom from "../general_components/button"


export default function HomeOwner({ display_button }) {
    return (
        <div className="theme_container">
            <div className="homeowner_container">
                <div className="homeowner_heading">
                    <h1>Become a Homeowner with Milenium Haus</h1>
                </div>
                <div className="homeowner_content">
                    <div className="homeowner_sub_content">
                        <div><span><img src={img1} alt="" /></span> <h1>Shop</h1> </div>
                        <p>Start your journey with Milenium Haus today and we’ll help you qualify for a property, financing, and provide a risk-free end-to-end experience, that makes you a new homeowner in 60-90 days.</p>
                    </div>
                    <div className="homeowner_sub_content">
                        <div> <span><img src={img2} alt="" /></span><h1>Own</h1> </div>
                        <p>We help you find and afford a high-value market home, through fractional ownership, at ¼ of the price. Instantly increase your property value, while we vet co-owners, and handle everything for you, so you get your new ready-to-live home as soon as possible.</p>
                    </div>
                    <div className="homeowner_sub_content">
                        <div> <span><img src={img3} alt="" /></span> <h1>Enjoy</h1> </div>
                        <p>We do all the paperwork regarding relationships of co-owners. Our property management portal makes co-ownership easy and enjoyable. You simply enjoy your new home and return on investment.</p>
                    </div>
                </div>
                {display_button ? <div className="ho_button_wrapper">
                    <Theme_Buttom to={"/learn"} text={'Get Started'} />
                </div> :
                    null
                }

            </div>
        </div>

    )
}