import {Link } from "react-router-dom"
import "./navbar.css"
function Navbar( ) {


    return (
        <section className="navbar">
            <div className="logoWrapper">
                <Link to="/">
                    <div className="logo">
                        Museum 
                        <br></br>
                        Store
                    </div>
                </Link>
            </div>

            <div className="navbarLinks">
                <Link to="/shop">
                    Shop
                </Link>
                <Link to="checkout">
                    Checkout
                </Link>
            </div>

        </section>
    )
}

export default Navbar