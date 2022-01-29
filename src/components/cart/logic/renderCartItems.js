import allProducts from "../../../data/allProducts"
import React, {useState, useEffect} from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import {Link } from "react-router-dom"

function CartItems(props) {
    const [itemsToBeRendered, setItemsToBeRendered] = useState(props.itemsToBeRendered);
    const [totalDueAmount, setTotalDueAmount] = useState(0)
    

    //itemsToBeRendered={itemsToBeRendered} setItemsToBeRendered={setItemsToBeRendered}
    useEffect(()=>{
        getTotalDue()
        //when switching to the cart page the default total due is 0, we use the useEffect hook to get the total once the page rerenders
    }, [])

    function getTotalDue(){
        const items = props.itemsToBeRendered;
        let total = 0;
        
        for(let i = 0; i < itemsToBeRendered.length; i++) {
            total = total + (items[i][0].price * items[i][1])
        }

        setTotalDueAmount(total)
    }

    function decreaseQuantity(e){
        let currentId = e.target.parentElement.parentElement.id;
        let tempItems = itemsToBeRendered;

        for(let i = 0; i < itemsToBeRendered.length; i++) {
            if(tempItems[i][0].id == currentId) {
                if(tempItems[i][1] > 1) {
                    tempItems[i][1] -= 1;
                    document.querySelector(`#${tempItems[i][0].id}`).querySelector(".productQuantity").querySelector("h3").innerHTML = tempItems[i][1]
                     

                } else {
                     
                }
                 
            }
            
        }
        let newTotalQuantity = tempItems.map(item => (
            item[1]
        ))
        
        getTotalDue()
        props.setItemsToBeRendered(tempItems)
        
         
    }
    function increaseQuantity(e){
        let currentId = e.target.parentElement.parentElement.id;
        let tempItems = itemsToBeRendered;

        for(let i = 0; i < itemsToBeRendered.length; i++) {
            if(tempItems[i][0].id == currentId) {
                tempItems[i][1] += 1;
                document.querySelector(`#${tempItems[i][0].id}`).querySelector(".productQuantity").querySelector("h3").innerHTML = tempItems[i][1]
            }
            
        }

        let newTotalQuantity = tempItems.map(item => (
            item[1]
        ))
        
        getTotalDue()
        props.setItemsToBeRendered(tempItems)

    }
    
    function conditionalRender() {
 
        if(props.cartItems.length == 1) {
            return (
                <h2>No products added yet</h2>
            )
        } else {
            
        }
    }
 
    
    return (
        <div className="cartItems">
            {conditionalRender()}
            {itemsToBeRendered.map(item => (
                <div key={item[0].id} id={item[0].id} className="cartItem"> 
                    <Link to={`/shop/${item[0].id}`}>
                        <img src={item[0].image[0]}></img>
                    </Link>
                    <Link to={`/shop/${item[0].id}`}>
                        <p>{item[0].name}</p>
                    </Link>
                    <div className="productQuantity">
                        <h2 onClick={decreaseQuantity}>-</h2>
                        <h3 className>{item[1]}</h3>
                        <h2 onClick={increaseQuantity}>+</h2>
                    </div>
                    <div className="productPrice">
                        <p>€{item[0].price}</p>
                    </div>
                    <div className="productRemove">
                        <FaTrashAlt />
                    </div>
                </div>
            ))}
            <div className="itemsTotal">
                <h2>Total:</h2>
                <h2>€{totalDueAmount}</h2>
            </div>
        </div>
    )
}

export default CartItems    