import "./index.css"
import img1 from "../../assets/images/b_1.png"
import img2 from "../../assets/images/b_2.png"
import img3 from "../../assets/images/b_3.png"
import Theme_Buttom from "../general_components/button"

export default function SignUp() {
    return (
        <div className="signup_container_bg theme_container">
            <div className="signup_container">
                <div className="signup_content">
                    <h1>Milenium Haus Access</h1>
                    <p>A one-time program fee of</p>
                    <div className="signup_button">
                        <Theme_Buttom text={"$97 or $9/month"} />
                    </div>
                </div>
                <div className="benefit_wrapper">
                    <div className="benefit_heading">
                        <h2>Benefits</h2>
                    </div>
                    <div className="benefit_container">
                        <div className="benefit_sub_container">
                            <img src={img1} alt="" />
                            <p>First look into new listings</p>
                        </div>
                        <div className="benefit_sub_container">
                            <img src={img2} alt="" />
                            <p>Get alerts for the best opportunities</p>
                        </div>
                        <div className="benefit_sub_container">
                            <img src={img3} alt="" />
                            <p>$2,500-$10,000 closing credit</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}