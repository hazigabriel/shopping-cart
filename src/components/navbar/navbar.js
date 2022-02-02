import {Link } from "react-router-dom"
import { useState } from "react";
import "./navbar.css"
function Navbar(props) {
     
 
    
     return (
        <div className="gridContainer navbarGrid"> {/*added navbarGrid class so that we can set up a bg color for the whole width */}
             <section className="navbar gridItem">
                <div className="logoWrapper">
                    <Link to="/shopping-cart">
                        <div className="logo">
                            Museum 
                            <br></br>
                            Store
                        </div>
                    </Link>
                </div>

                <div className="navbarLinks">
                    <Link to="/shopping-cart/shop">
                        Shop
                    </Link>
                    <Link to="/shopping-cart/cart">
                        Cart({props.totalCartItems})
                    </Link>
                </div>

            </section>
        </div>
    )
}

export default Navbar