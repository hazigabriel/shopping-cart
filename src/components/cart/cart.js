import "./cart.css"
import allProducts from "../../data/allProducts"
import { FaTrashAlt } from 'react-icons/fa';
import CartItems from "./logic/renderCartItems"

function Checkout(props) {
    return (
        <div className="gridContainer">
            <div className="gridItem">
                
                <section className="cartWrapper">
                    <CartItems {...props}/> 

                    <div className="promoCodeWrapper">
                        <h3>Enter promo code</h3> 
                        <input type="text"></input>
                        <p className="submitPromoCode">Submit</p>
                        <p className="validPromoCode">Valid code</p>
                        <p className="invalidPromoCode">Invalid promo code</p>
                    </div>               
                </section>

            </div>
        </div>
    )
}

export default Checkout