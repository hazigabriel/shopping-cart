import "./shop.css"
import React, {useState, useEffect} from 'react';
import allProducts from "../../data/allProducts"
import {Link } from "react-router-dom"
import Products from "./logic/renderProducts" 


function Shop(props) {

    const [category, setCategory] = useState('All Items')
    const [cartItems, setCartItems] = useState(props.cartItems);
    const [cartItemss, setCartItemss] = useState()
    
    
    function choseCategory(e) {
        e.preventDefault();
        e.target.parentElement.querySelector(".radioButton").checked = true;
        setCategory(e.target.parentElement.querySelector("p").innerHTML) //this being the category name
        
    }
    

    function addItem(e) {
        let currentId = e.target.parentElement.parentElement.id;
        
        allProducts.forEach((item) =>{ 
            if(item.id == currentId) {
                props.addToCart(item, 1)
                props.computeCartQuantity()
            }
        })
     }



    return (
        <div className="gridContainer  shopGrid">
            <div className="itemGridItem">
                <section className="shopWrapper">   
                    <div className="categories">
                        <h3>category</h3>
                         
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

                    <Products 
                        products={category} 
                        addItem={addItem}
                        individualProduct={props.individualProduct}
                        setIndividualProduct={props.setIndividualProduct} 
                    />     

      
                </section>
            
            </div>
        </div>
    )
}

export default Shop
