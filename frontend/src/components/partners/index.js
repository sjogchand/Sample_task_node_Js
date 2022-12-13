import "./index.css"
import img1 from "../../assets/images/6.png"
import img2 from "../../assets/images/7.png"
import img3 from "../../assets/images/8.png"
import img4 from "../../assets/images/9.png"
import img5 from "../../assets/images/10.png"


export default function Partners() {
    return (
        <div className="theme_container">

            <div className="partner_container">
                <div className="partner_heading">
                    <h2>Our Trusted &</h2>
                    <h1>Reliable Partners</h1>
                </div>
                <div className="partner_images">
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                    <div className="partner_sub_img">
                        <img src={img4} alt="" />
                    </div>
                    <div className="partner_sub_img">
                        <img src={img5} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}