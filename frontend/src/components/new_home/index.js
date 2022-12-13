import "./index.css"
import img from "../../assets/images/4.png"
import Theme_Buttom from "../general_components/button"

export default function NewHome() {
    return (
        <div className="newhome_container_bg_wrapper">

            <div className="newhome_container_bg theme_container">
                <div className="newhome_container ">
                    <div className="newhome_content">
                        <h1>New Home, Your Location</h1>
                        <p>Milenium Haus gives you a seamless experience when buying a home. If you’re a millennial stuck renting in The Bay Area or Toronto, we make it easy to become an investor in 60-90 days.</p>
                        <Theme_Buttom to={"/ownership"} text={"Learn More"}/>
                    </div>
                    <div className="newhome_image">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>


    )
}