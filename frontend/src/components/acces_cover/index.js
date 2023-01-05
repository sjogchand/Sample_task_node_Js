import "./index.css"
import img from "../../assets/images/access.png"
import img1 from "../../assets/images/preview.png"
import img2 from "../../assets/images/prioty.png"
import img3 from "../../assets/images/reward.png"
import Theme_Buttom from "../general_components/button"




export default function AccessCover() {
    return (

        <div className="access_container_bg theme_container">
            <div className="access_container">
                <div className="Access_sub_container">
                    <div className="access_content" >
                        <h1>My Milenium Haus App</h1>
                        <h3>Bypass the line</h3>
                        <p>For as little as $9, you’ll gain exclusive access to our best listings and receive a massive credit at closing.</p>
                    </div>
                    <div className="access_image">
                        <img src={img} alt="" />
                    </div>
                </div>

                <div className="access_sub_wrapper">
                    <div className="access_sub_wrapper_content">
                        <div><span><img src={img1} alt="" /></span> <h1>Preview</h1> </div>
                        <p>Get early access to ADU-eligible listings with the highest ROI potential.</p>
                    </div>
                    <div className="access_sub_wrapper_content">
                        <div> <span><img src={img2} alt="" /></span><h1>Priority</h1> </div>
                        <p>Get alerts for the best opportunities before they’re available to the general public or scooped up by institutional funds.</p>
                    </div>
                    <div className="access_sub_wrapper_content">
                        <div> <span><img src={img3} alt="" /></span> <h1>Rewards</h1> </div>
                        <p>Get exclusive bonuses, including $2,500-$10K in credit toward your Milenium Haus when you’re ready to buy.</p>
                    </div>
                </div>

                <div className="access_button_wrapper">
                    <Theme_Buttom to={"/sign-up"} text={"Enroll Now"} />
                </div>
            </div>

        </div>

    )
}