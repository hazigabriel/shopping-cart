import allProducts from "../../../data/allProducts"
import React, {useState, useEffect} from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import {Link } from "react-router-dom"

function CartItems(props) {
    const [totalAmountDue, setTotalAmountDue] = useState(0)
    
    useEffect(() => {
        computeTotalDue()
    }, [])
    function computeTotalDue(){
        let temp = props.cartProducts;
        let total = 0;
        
        (function(){
            temp.forEach(item => {
                total = total + item[0].price *  item[1] 
            })
        })()
      

        setTotalAmountDue(total)
       
     }
     
    function decreaseQuantity(e){
        let currentId = e.target.parentElement.parentElement.id;
        let newCartProducts = props.cartProducts
        let currentProductIndex;

        props.cartProducts.find((item, index)=> {
            currentProductIndex = index
            return item[0].id === currentId
        })
        

        if(newCartProducts[currentProductIndex][1] <= 1) {
            return
        } else {
            newCartProducts[currentProductIndex][1] -= 1; 
            
        }
        
        computeTotalDue()
        props.computeCartQuantity()
        props.setCartProducts([...newCartProducts])
     
    }
    function increaseQuantity(e) {
        let currentId = e.target.parentElement.parentElement.id;
        let newCartProducts = props.cartProducts
        let currentProductIndex;

        props.cartProducts.find((item, index)=> {
            currentProductIndex = index
            return item[0].id === currentId
        })
         
        if(newCartProducts[currentProductIndex][1] >= 99) {
            newCartProducts[currentProductIndex][1] = 99;
        } else {
            newCartProducts[currentProductIndex][1] += 1; 
        }

        computeTotalDue()
        props.computeCartQuantity()
        props.setCartProducts([...newCartProducts])
    }
    function deleteProduct(e){
        let temp = props.cartProducts;
        let idToBeRemoved = e.target.parentElement.parentElement.id
        let indexToBeRemoved;
        temp.find((item, index) => {
            indexToBeRemoved = index;
            return item[0].id === idToBeRemoved
        })
        temp.splice(indexToBeRemoved, 1)
        props.setCartProducts([...temp])
        computeTotalDue()
   
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
                            <div className="productRemove" id={item[0].id}>
                                <FaTrashAlt onClick={deleteProduct}/>
                            </div>
                        </div>
                    ))}
                    <div className="itemsTotal">
                        <h2>Total:</h2>
                        <h2>€{totalAmountDue}</h2>
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