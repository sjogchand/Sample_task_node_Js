import "./index.css"
import img1 from "../../assets/images/shop.png"
import img2 from "../../assets/images/own.png"
import img3 from "../../assets/images/enjoy.png"


export default function Move() {
    return (
        <div className="move_container theme_container">
            <div className="move_heading">
                <h3>Flexible Ownership</h3>
                <h1>Make your move, on your terms</h1>
            </div>
            <div className="move_content">
                <div className="move_sub_content">
                    <div><span><img src={img1} alt="" /></span> <h1>Transfer</h1> </div>
                    <p>Love co-ownership, but thinking your Milenium Haus isn't the perfect fit? Within your first 12 months of ownership, you can transfer to another Milenium Haus that fits your lifestyle, hassle-free.</p>
                </div>
                <div className="move_sub_content">
                    <div> <span><img src={img2} alt="" /></span><h1>Resale</h1> </div>
                    <p>Time to move? After 1 year of ownership, you can set your price, leverage our marketplace of buyers, and sell with ease. </p>
                </div>
                <div className="move_sub_content">
                    <div> <span><img src={img3} alt="" /></span> <h1>Selldown</h1> </div>
                    <p>Do you own a home that you want to profit from or sell shares of? You could add a Milenium Haus ADU to your property, and sell it or rent it out for additional income. Your property value and net worth will increase instantly and we'll take care of the whole process!</p>
                </div>
            </div>
        </div>
    )
}