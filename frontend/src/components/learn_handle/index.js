import "./index.css"
import img from "../../assets/images/handle.png"
import Theme_Buttom from "../general_components/button"

export default function Handle() {
    return (
        <div className="theme_container">
            <div className="handle_container">
                <div className="handle_content">
                    <div className="handle_content_sub">
                        <h2>True home ownership</h2>
                        <h1>We handle everything legal</h1>
                        <div className="m_handle_image">
                            <img src={img} alt="" />
                        </div>
                        <p>We make it simple to own and manage your property with other co-owners. We’ll help take care of all the legal paperwork, as well as fixes, mortgages and disputes to make living with Milenium Haus easy and enjoyable.</p>
                        <Theme_Buttom to={"/ownership"} text={"Learn More"} />
                    </div>
                </div>
                <div className="handle_image">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>

    )
}