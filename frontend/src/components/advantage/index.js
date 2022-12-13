import "./index.css"
import img from "../../assets/images/advantage.png"

export default function Advantage() {
    return (
        <div className="theme_container">

            <div className="advantage_container">
                <div className="advantage_content">
                    <h1>Gain the Milenium Haus advantage</h1>
                    <div className="m_advantage_image">
                        <img src={img} alt="" />
                    </div>
                    <p>You want to become a homeowner, and or get the most out of your investment portfolio. </p>
                    <p> My Milenium Haus gives you a VIP home-buying advantage. Skip the line, and be the first to know about new listings eligible for the massive value increase of adding a Milenium Haus ADU. </p>
                    <p>     Modular Homes (ADUs) and co-ownership are the future of real estate. A limited number of eligible properties exist in urban markets, and trends show that institutional funds are scooping these up fast, so fast they’re buying entire neighborhoods before regular people have a chance to invest. My Milenium Haus gives you the exclusive opportunity to get these hot listings that most miss out on.
                    </p>
                </div>
                <div className="advantage_image">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>

    )
}