import {Link } from "react-router-dom"
import "./homepage.css"
import video from "../../images/museum_stock_footage.mp4"
function Homepage() {
    return (
        <div>
             <div className="videoWrapper">
                <div className="gridContainer"> 
                    <div className="gridItem">
                        <div className="homepageContent">
                            <div className="homepageCtaText">
                                <h2>Welcome to the fake British Museum shop</h2>
                            </div>
                            <Link to="/shop">
                                <div className="homepageCTA">
                                    <h2>Start shopping</h2>
                                    <h3>use promo code "<span>99OFF</span>" at checkout for a surprise</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <video loop autoPlay muted>
                    <source
                        src={video}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
          
             
        </div>
    )
}

export default Homepage