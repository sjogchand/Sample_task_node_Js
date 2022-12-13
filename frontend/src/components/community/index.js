import "./index.css"
import img from "../../assets/images/community2.png"
import img2 from "../../assets/images/c2.png"

import Theme_Buttom from "../general_components/button"

export default function Community() {
    return (
        <div className="community_container_bg theme_container">
            <div className="community_container">
                <div className="community_content">
                    <h1>Sharing the wealth is caring</h1>
                    <p>Make your community more <br /> equitable, and become a homeowner with the lowest possible carbon footprint. </p>
                    <Theme_Buttom to={"/contact"} text={"Contact us"} />
                </div>
                <div className="community_image">
                    <img className="desktop" src={img} alt="" />
                </div>
            </div>
        </div>

    )
}