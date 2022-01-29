import "./shop.css"
import React, {useState, useEffect} from 'react';
import allProducts from "../../data/allProducts"
import {Link } from "react-router-dom"
import Products from "./logic/renderProducts" 


function Shop(props) {

    const [category, setCategory] = useState('All Items')
    const [cartItems, setCartItems] = useState(props.cartItems);
    
    useEffect(() => {
        // alert(" s-a updatat")
      }, [props.cartItems])
    
    function choseCategory(e) {
        e.preventDefault()
        e.target.parentElement.querySelector(".radioButton").checked = true
        setCategory(e.target.parentElement.querySelector("p").innerHTML)
        
    }
    

    function addItem(e) {
        let currentId = e.target.parentElement.parentElement.id;
        let storedItems = props.cartItems;
        //console.log(currentId)
        let clickIndex;
 
        
        for(let i = 0; i < storedItems.length; i++) {
            if(storedItems[i].itemId == currentId) {
                clickIndex = i
            }
        }
        
        if(clickIndex) {
            storedItems[clickIndex].quantity = storedItems[clickIndex].quantity + 1;    
        } else {
            storedItems.push({itemId: currentId, quantity: 1})
             
        }
        
        props.updateTotalCartItems()
        props.setCartItems(storedItems)
        // console.log(props.cartItems)

     }



    return (
        <div className="gridContainer  shopGrid">
            <div className="gridItem">
                <section className="shopWrapper">   
                    <div className="categories">
                        <h3>category    </h3>
                         
                        <form className="radioButtons">
                            <div className="radio"  >
                                <label onClick={choseCategory}>
                                    <input type="radio" value="option1"  name="category" className="radioButton" defaultChecked   />
                                    <div className="radioButtonDisplayed"></div>
                                    <p>All Items</p>
                                </label>
                            </div>
                            <div className="radio">
                                <label onClick={choseCategory}>
                                    <input type="radio" value="option2"  name="category" className="radioButton"  />
                                    <div className="radioButtonDisplayed"></div>
                                    <p>Replicas</p>
                                </label>
                            </div>
                            <div className="radio">
                                <label onClick={choseCategory}>
                                    <input type="radio" value="option3" name="category" className="radioButton"  />
                                    <div className="radioButtonDisplayed"></div>
                                    <p>Jewellery</p>
                                </label>
                            </div>
                            <div className="radio">
                                <label onClick={choseCategory}>
                                    <input type="radio" value="option4" name="category" className="radioButton"      />
                                    <div className="radioButtonDisplayed"></div>
                                    <p>Books</p>
                                </label>
                            </div>
                        </form>
                    </div>
                    <Products products={category} addItem={addItem} />     

               
                </section>
            
            </div>
        </div>
    )
}

export default Shop