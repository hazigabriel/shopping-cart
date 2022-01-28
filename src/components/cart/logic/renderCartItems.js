import allProducts from "../../../data/allProducts"
import React, {useState, useEffect} from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function CartItems(props) {
    const [itemsToBeRendered, setItemsToBeRendered] = useState(getCartItems());

    function getCartItems(){

        let tempItems = [];
        for(let i = 1; i < props.cartItems.length; i++) {
            for(let e = 0; e < allProducts.length; e++) {
                if(props.cartItems[i].itemId == allProducts[e].id) {
                    tempItems.push([allProducts[e], props.cartItems[i].quantity]);
                } 
            }
        }
        return tempItems
    }
    function isEmpty() {
        //console.log(itemsToBeRendered)
        if(props.cartItems.length == 1) {
            return (
                <h2>No products added yet</h2>
            )
            
        } else {
            getCartItems()
           // console.log(getCartItems)
        }
    }
 
    
    return (
        <div className="cartItems">
            {isEmpty()}
            {itemsToBeRendered.map(item => (
                <div key={item[0].id}className="cartItem">
                    <img src={item[0].image[0]}></img>
                    <p>{item[0].name}</p>
                    <div className="productQuantity">
                        <h2>-</h2>
                        <h3>{item[1]}</h3>
                        <h2>+</h2>
                    </div>
                    <div className="productPrice">
                        <p>€{item[0].price}</p>
                    </div>
                    <div className="productRemove">
                        <FaTrashAlt />
                    </div>
                </div>
               
                        // <div className="cartItem">
                        //     <img src={allProducts[12].image[0]}></img>
                        //     <p>{allProducts[12].name}</p>
                        //     <div className="productQuantity">
                        //         <h2>-</h2>
                        //         <h3>9</h3>
                        //         <h2>+</h2>
                        //     </div>
                        //     <div className="productPrice">
                        //         <p>$23</p>
                        //     </div>
                        //     <div className="productRemove"><FaTrashAlt /></div>
                        // </div>
            ))}
        </div>
    )
}

export default CartItems    