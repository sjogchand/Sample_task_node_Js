import "./index.css"
import img from "../../assets/images/a_1.png"
import img1 from "../../assets/images/a_2.png"
import img2 from "../../assets/images/a_3.png"



export default function Articles() {
    return (
        <div className="theme_container">
            <div className="article_container">
                <div className="article_heading">
                    <h1>News & Articles</h1>
                    <p>Read what's happening in Real Estate</p>
                </div>
                <div className="article_content">
                    <div className="article_sub_content">
                        <div className="article_image">
                            <img src={img} alt="" />
                        </div>
                        <h3>Understanding COVID-19's impact on the real estate sector</h3>
                        <p>The drastic increase in the number of new Coronavirus cases in 2021, could adversely affect the demand for residential real estate, which was just beginning to show signs of recovery</p>
                        <div className="article_date">
                            <h6>Amanda Mcclain</h6>
                            <h6>Jun 28, 2022</h6>
                        </div>
                    </div>
                    <div className="article_sub_content">
                        <div className="article_image">
                            <img src={img1} alt="" />
                        </div>
                        <h3>What our legal partners say about Co-Ownership after 25 years of TIC agreements</h3>
                        <p>Broadly speaking, tenancy in common (which is the same as tenants in common, and often abbreviated as TIC) describes a co-ownership where each owner is free to choose who will inherit his/her interest.</p>
                        <div className="article_date">
                            <h6>Amanda Mcclain</h6>
                            <h6>Jun 28, 2022</h6>
                        </div>
                    </div>
                    <div className="article_sub_content">
                        <div className="article_image">
                            <img src={img2} alt="" />
                        </div>
                        <h3>Commercial real estate must do more than merely adapt to coronavirus</h3>
                        <p>The drastic increase in the number of new Coronavirus cases in 2021, could adversely affect the demand for residential real estate, which was just beginning to show signs of recovery</p>
                        <div className="article_date">
                            <h6>Amanda Mcclain</h6>
                            <h6>Jun 28, 2022</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}