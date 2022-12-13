import "./index.css"
import img from "../../assets/images/5.png"
import Theme_Buttom from "../general_components/button"

export default function Rent() {
    return (
        <div className="theme_container">

            <div className="rent_container">
                <div className="rent_image">
                    <img src={img} alt="" />
                </div>
                <div className="rent_content">
                    <h2>We Make Ownership Simple for All</h2>
                    <h1>Why rent when you can own?</h1>
                    <div className="rent_image_mobile">
                        <img src={img} alt="" />
                    </div>
                    <p>The average renter in SF spends $193,800 after tax in 5 years on rent. Minimize your taxes and turn your loss into a gain of $250-500k over 5 years. Milenium Haus makes home-ownership equitable to wider demographics, so you can stop losing your money through renting, and start building your wealth. </p>
                    <div className="ow_btn">
                        <Theme_Buttom to={"/listing"} text={"Become a Homeowner"} />
                    </div>
                </div>
            </div>
        </div>

    )
}