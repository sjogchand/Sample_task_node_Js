import "./index.css"
import img from "../../assets/images/learn_cover.png"


export default function LearnCover() {
    return (
        <div className="learn_container">
            <div className="learn_content">
                <h3>How Milenium Haus Works</h3>
                <h1>Co-ownership, Done for you.</h1>
                <p>You own the home, we make everything easy. Where renters become homeowners in high-value real estate markets. </p>
            </div>
            <div className="learn_image">
                <img src={img} alt="" />
            </div>
        </div>
    )
}