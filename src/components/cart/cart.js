import "./cart.css"
import allProducts from "../../data/allProducts"
import { FaTrashAlt } from 'react-icons/fa';
import CartItems from "./logic/renderCartItems"

function Checkout(props) {
    return (
        <div className="gridContainer">
            <div className="gridItem">
                
                <section className="cartWrapper">
                    <CartItems cartItems={props.cartItems} /> 
                    {/* <div className="cartItems">
                        <div className="cartItem">
                            <img src={allProducts[12].image[0]}></img>
                            <p>{allProducts[12].name}</p>
                            <div className="productQuantity">
                                <h2>-</h2>
                                <h3>9</h3>
                                <h2>+</h2>
                            </div>
                            <div className="productPrice">
                                <p>$23</p>
                            </div>
                            <div className="productRemove"><FaTrashAlt /></div>
                        </div>
                        <div className="cartItem">
                            <img src={allProducts[15].image[0]}></img>
                            <p>{allProducts[15].name}</p>
                            <div className="productQuantity">
                                <h2>-</h2>
                                <h3>9</h3>
                                <h2>+</h2>
                            </div>
                            <div className="productPrice">
                                <p>$23</p>
                            </div>
                            <div className="productRemove"><FaTrashAlt /></div>
                        </div>
                        <div className="cartItem">
                            <img src={allProducts[12].image[0]}></img>
                            <p>{allProducts[12].name}</p>
                            <div className="productQuantity">
                                <h2>-</h2>
                                <h3>9</h3>
                                <h2>+</h2>
                            </div>
                            <div className="productPrice">
                                <p>$23</p>
                            </div>
                            <div className="productRemove"><FaTrashAlt /></div>
                        </div>
                        
                        <div className="itemsTotal">
                            <h2>Total:</h2>
                            <h2>$342.12312</h2>
                        </div>
                    </div> */}

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