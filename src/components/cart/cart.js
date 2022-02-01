import "./cart.css"
import allProducts from "../../data/allProducts"
import { FaTrashAlt } from 'react-icons/fa';
import CartItems from "./logic/renderCartItems"
import { useEffect } from "react";
function Cart(props) {
  
    return (
        <div className="gridContainer">
            <div className="gridItem">
                
                <CartItems {...props}/>           
                

            </div>
        </div>
    )
}

export default Cart
