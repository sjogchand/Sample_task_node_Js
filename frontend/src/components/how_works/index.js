import "./index.css"
import img from "../../assets/images/how.png"
import Theme_Buttom from "../general_components/button"

export default function HowWorks() {
    return (
        <div className="theme_container">

            <div className="how_container">
                <div className="how_image">
                    <img src={img} alt="" />
                </div>
                <div className="how_content">
                    <h1>How My Milenium Haus works</h1>
                    <div className="m_how_image">
                        <img src={img} alt="" />
                    </div>
                    <p>My cost: One-time enrollment fee of $97 or $9 per month </p>
                    <p>Use our app to discover and save exclusive listings. Once you’re in, download or update the My Milenium Haus app to see listings available only to My Milenium Haus buyers.  </p>
                    <p>View VIP listings. Early access listings will only be viewable in the app, as soon as they become available </p>
                    <p>  Buy and get rewarded. When you buy a Milenium Haus, you’ll get $2,500 in closing credits per 1/4 share purchased.</p>
                    <Theme_Buttom to={"/signup"} text={"Sign Me Up"} />
                </div>
            </div>
        </div >


    )
}