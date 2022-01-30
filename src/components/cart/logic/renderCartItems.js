import allProducts from "../../../data/allProducts"
import React, {useState, useEffect} from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import {Link } from "react-router-dom"

function CartItems(props) {
  
   
    function getTotalDue(){
        // const items = props.itemsToBeRendered;
        // let total = 0;
        
        // for(let i = 0; i < itemsToBeRendered.length; i++) {
        //     total = total + (items[i][0].price * items[i][1])
        // }

        
        // setTotalDueAmount(total)
        
    }
     
    function decreaseQuantity(e){
        // let currentId = e.target.parentElement.parentElement.id;
        // let tempItems = props.cartItems;



        // for(let i = 1; i < tempItems.length; i++) {
        //     if(tempItems[i].itemId == currentId) {
        //         tempItems[i].quantity -= 1;
        //         document.querySelector(`#${tempItems[i].itemId}`).querySelector(".productQuantity").querySelector("h3").innerHTML = tempItems[i].quantity
        //     }
            
        // }
        // getTotalDue()
        
        // //console.log(tempItems)
        
        // props.setCartItems(tempItems)
        // console.log(tempItems)
        
    }
    let increaseQuantity = async (e) =>  {
    
        let currentId = e.target.parentElement.parentElement.id;
        // let tempItems = props.cartItems;
        let newCartProducts = props.cartProducts
        let currentProductIndex;

        props.cartProducts.find((item, index)=> {
            currentProductIndex = index
            return item[0].id === currentId
        })
         
        newCartProducts[currentProductIndex][1] += 1
        
        await props.setCartProducts(newCartProducts)

        // for(let i = 1; i < tempItems.length; i++) {
        //     if(tempItems[i].itemId == currentId) {
        //         tempItems[i].quantity += 1;
        //         document.querySelector(`#${tempItems[i].itemId}`).querySelector(".productQuantity").querySelector("h3").innerHTML = tempItems[i].quantity
        //     }
            
        // }
        // getTotalDue()
        // //console.log(tempItems)
        // props.setCartItems(tempItems)
        // console.log(tempItems)
        
    }
    
    function conditionalRender() {
 
        if(props.cartProducts.length == 0) {
            return (
                <div class  Name="cartItems">
                    <h2>No products added yet</h2>
                </div>
            )
        } else {
            return (
                <div className="cartItems">
                    {props.cartProducts.map(item => (
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
                        <h2>PLACEHOLDER</h2>
                    </div>
                </div>
            )
        }
    }
 
    
    return (
        conditionalRender()
    )
}

export default CartItems    