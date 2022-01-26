import {Link } from "react-router-dom"
import "./navbar.css"
function Navbar( ) {


    return (
        <div className="gridContainer navbarGrid"> {/*added navbarGrid class so that we can set up a bg color for the whole width */}
             <section className="navbar gridItem">
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
                        Cart(0)
                    </Link>
                </div>

            </section>
        </div>
    )
}

export default Navbar