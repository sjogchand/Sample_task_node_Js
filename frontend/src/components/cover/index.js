import "./index.css"
// import img from "../../assets/images/1.png"
import img from "../../assets/images/cover_video.mp4"
import Theme_Buttom from "../general_components/button"

export default function Cover() {
    return (
        <div className="cover_container">
            <div className="cover_image">
                <video playsInline loop autoPlay='true' muted>
                    <source src={img} type="video/mp4" />
                </video>
            </div>
            <div className="cover_content">
                <div className="cover_content_sub">
                    <h2>How Milenium Haus Works</h2>
                    <h1>Co-ownership, Done for you.</h1>
                    <p>You own the home, we make everything easy. Where renters become homeowners in high-value real estate markets. </p>
                    <Theme_Buttom to={"/listing"} text={"Explore Now"} />
                </div>
            </div>
        </div>
    )
}