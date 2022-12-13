import "./index.css"
import img from "../../assets/images/response.png"


export default function PostResponse() {
    return (
        <div className="theme_container">

            <div className="response_container">
                <div className="response_content">
                    <div className="response_image">
                        <img src={img} alt="" />
                    </div>
                    <h1>Thank you for getting in touch!</h1>
                    <p>We appreciate you contacting us. One of our customer happiness members will be getting back to you shortly.</p>
                </div>
            </div>
        </div>


    )
}