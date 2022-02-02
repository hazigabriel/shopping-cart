import allProducts from "../../../data/allProducts"
import React, {useState, useEffect} from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import {Link } from "react-router-dom"

function CartItems(props) {
    const [totalAmountDue, setTotalAmountDue] = useState(0)
 
    
    useEffect(() => {
        computeTotalDue()
         
    }, [props.isPromoActive])

    function computeTotalDue(){
        let temp = props.cartProducts;
        let total = 0;
        
        (function(){
            temp.forEach(item => {
                total = total + item[0].price *  item[1] ;
            })
        })()
      
        if(props.isPromoActive[0]) { //check if a promotion is active, if a promo is applied calculate discount
            let percentage = (props.isPromoActive[1] / 100) * total;
            total = total - percentage
        }   
        
        //from here https://stackoverflow.com/questions/6134039/format-number-to-always-show-2-decimal-places
        //setting up the total amount due with math round to show only 2 decimals from the total price
        setTotalAmountDue((Math.round(total * 100) / 100).toFixed(2))
       
     }
     
    function decreaseQuantity(e){
        let currentId = e.target.parentElement.parentElement.id;
        let newCartProducts = props.cartProducts
        let currentProductIndex;

        props.cartProducts.find((item, index)=> {
            currentProductIndex = index;
            return item[0].id === currentId
        })
        

        if(newCartProducts[currentProductIndex][1] <= 1) {
            return
        } else {
            newCartProducts[currentProductIndex][1] -= 1; 
            
        }
        
        computeTotalDue();
        props.computeCartQuantity();
        props.setCartProducts([...newCartProducts])
     
    }
    function increaseQuantity(e) {
        let currentId = e.target.parentElement.parentElement.id;
        let newCartProducts = props.cartProducts;
        let currentProductIndex;

        props.cartProducts.find((item, index)=> {
            currentProductIndex = index;
            return item[0].id === currentId;
        })
         
        if(newCartProducts[currentProductIndex][1] >= 99) {
            newCartProducts[currentProductIndex][1] = 99;
        } else {
            newCartProducts[currentProductIndex][1] += 1; 
        }

        computeTotalDue();
        props.computeCartQuantity();
        props.setCartProducts([...newCartProducts]);
    }
    function deleteProduct(e){
        let temp = props.cartProducts;
        let idToBeRemoved = e.target.parentElement.parentElement.id;
        let indexToBeRemoved;

        temp.find((item, index) => {
            indexToBeRemoved = index;
            return item[0].id === idToBeRemoved;
        })

        temp.splice(indexToBeRemoved, 1);
        
        props.setCartProducts([...temp]);
        computeTotalDue();
        props.computeCartQuantity();
        checkIfPromoShouldRemain();
 
    }
    function checkPromoCode(){
        let temp;

        let promoCode = document.querySelector(".promoCodeInput").value.toUpperCase()
       
        let acceptablePromoCode = [
            "15OFF",
            "50OFF",
            "99OFF",
        ]
 
        if(promoCode == acceptablePromoCode[0]) {
            temp = [true, 15]
        } else if(promoCode == acceptablePromoCode[1]) {
            temp = [true, 50]
        } else if(promoCode == acceptablePromoCode[2]) {
            temp = [true, 99]
        } else {
            temp = [false, "nada"]
        }
        
        props.setIsPromoActive(...[temp])
        computeTotalDue()
    } 
    function checkIfPromoShouldRemain() {
        if(props.cartProducts.length == 0) {
            props.setIsPromoActive([false, 'nada'])
        }  
    } 
    function totalPrice() {
        if(props.isPromoActive[0]) {
            return (
                <div className="itemsTotal">
                            <h2>Total:</h2>
                            <h2>
                                €{totalAmountDue}
                                <br></br>
                                <span className="discountPercent">
                                    {props.isPromoActive[1]}% off
                                </span>
                            </h2>
                            
                </div>
            )
        } else {
            return (
                <div className="itemsTotal">
                            <h2>Total:</h2>
                            <h2>
                                €{totalAmountDue}
                            </h2>
                            
                </div>
            )
        }
    }

    function updateDisplayedProduct(e) {
        const elementIndex = e.target.parentElement.parentElement.id
        let temp;
        allProducts.forEach((item) =>{ 
            if(item.id == elementIndex) {
                temp = item
            }
        })
        props.setIndividualProduct(temp)
    }

    function conditionalRender() {
     
        if(props.cartProducts.length == 0) {
            return (
                <section className="cartWrapper">
                    <div className="cartItems">
                        <h2>No products added yet</h2>
                    </div>
                </section>
            )
        } else {
            return (
                <section className="cartWrapper"> 
                    <div className="cartItems">
                        {props.cartProducts.map(item => (
                            <div key={item[0].id} id={item[0].id} className="cartItem"> 
                                <Link onClick={updateDisplayedProduct} to={`/shopping-cart/shop/${item[0].id}`}>
                                    <img src={item[0].image[0]}></img>
                                </Link>
                                <Link onClick={updateDisplayedProduct} to={`/shopping-cart/shop/${item[0].id}`}>
                                    <p>{item[0].name}</p>
                                </Link>
                                <div className="productQuantity">
                                    <h2 onClick={decreaseQuantity}>-</h2>
                                    <h3>{item[1]}</h3>
                                    <h2 onClick={increaseQuantity}>+</h2>
                                </div>
                                <div className="productPrice">
                                    <p>€{item[0].price}</p>
                                </div>
                                <div className="productRemove" id={item[0].id}>
                                    <FaTrashAlt onClick={deleteProduct}/>
                                </div>
                            </div>
                        ))}
                        {totalPrice()}
                    </div>
                    <div className="promoCodeWrapper">
                        <h3>Enter promo code</h3>
                        <p className="promoCodeHint">(use "<span>15OFF</span>" for a discount)</p> 
                        <input className="promoCodeInput" type="text"></input>
                        <p className="submitPromoCode" onClick={checkPromoCode}>Submit</p>
                        <p className="validPromoCode">Valid code</p>
                        <p className="invalidPromoCode">Invalid promo code</p>
                    </div>     
                </section>
            )
        }
    }
 
    
    return (
        conditionalRender()
    )
}

export default CartItems    
