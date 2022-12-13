import "./index.css"
import img from "../../assets/images/3.png"
import Theme_Buttom from "../general_components/button"

export default function OwnerShip({btn_link}) {
    return (
        <div className="theme_container">

            <div className="ownership_container">
                <div className="ownership_content">
                    <h2>We Make Ownership Simple for All</h2>
                    <h1>How LLC TIC Co-ownership Works </h1>
                    <div className="ownership_image_mobile">
                        <img src={img} alt="" />
                    </div>
                    <p>Tenancy In Common is a kind of fractional ownership where people share a property title.</p>
                    <p> Each property, along with its co-owners, is governed by an operating agreement in an LLC TIC structure.</p>
                    <p> You get homeowner and investor status, for a fraction of a normal down payment. You may sell your share of ownership, or rent out your unit and earn passive income. Fair dispute resolution and legal are handled by Milenium Haus.
                    </p>
                    <div className="ow_btn">
                        <Theme_Buttom to={btn_link} text={'Explore More'} />
                    </div>
                </div>
                <div className="ownership_image">
                    <img src={img} alt="" />
                </div>
            </div>

        </div>
    )
}