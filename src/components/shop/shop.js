import "./shop.css"
import React, {useState, useEffect} from 'react';
import allProducts from "../../data/allProducts"
import {Link } from "react-router-dom"
import Products from "./logic/renderProducts" 
function Shop() {
    const [category, setCategory] = useState('All Items')
    const [displayedProducts, setDisplayedProducts] = useState(category)


    // useEffect(() => {
    //     console.log("Your currently category is " + category)
    // }, [category])


    function choseCategory(e) {
        e.preventDefault()
        e.target.parentElement.querySelector(".radioButton").checked = true
        setCategory(e.target.parentElement.querySelector("p").innerHTML)
         
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
                    <Products products={category} />     

                    {/* <div className="shopContent">
                    <Products products={category}/>     
                        <div className="productWrapper">
                            <Link to="/shop/:id">
                                <div className="productImageWrapper">
                                    <img src={allProducts[12].image[0]}></img>
                                    
                                </div>
                            </Link>
                            <div className="productInfo">
                                <h3>{allProducts[12].name}</h3> 
                                <h3>€{allProducts[0].price}</h3>
                            </div>
                            <div className="productButtons">
                                <div className="addProduct">
                                    Add to cart
                                </div>
                                <Link to="/shop/:id">
                                    <div className="viewProductDetails">
                                        View details
                                    </div>
                                </Link>
                            </div> 
                        </div>
                        <div className="productWrapper">
                            
                            <div className="productImageWrapper">
                                <img src={allProducts[15].image[0]}></img>
                                
                            </div>
                            <div className="productInfo">
                                <h3>{allProducts[15].name}</h3> 
                                <h3>€{allProducts[15].price}</h3>
                            </div>
                            <div className="productButtons">
                                <div className="addProduct">
                                    Add to cart
                                </div>
                                <div className="viewProductDetails">
                                    View details
                                </div>
                            </div> 
                        </div>
                        <div className="productWrapper">
                            
                            <div className="productImageWrapper">
                                <img src={allProducts[2].image[0]}></img>
                                
                            </div>
                            <div className="productInfo">
                                <h3>{allProducts[2].name}</h3> 
                                <h3>€{allProducts[2].price}</h3>
                            </div>
                            <div className="productButtons">
                                <div className="addProduct">
                                    Add to cart
                                </div>
                                <div className="viewProductDetails">
                                    View details
                                </div>
                            </div> 
                        </div>
                        <div className="productWrapper">
                            
                            <div className="productImageWrapper">
                                <img src={allProducts[7].image[0]}></img>
                                
                            </div>
                            <div className="productInfo">
                                <h3>{allProducts[7].name}</h3> 
                                <h3>€{allProducts[7].price}</h3>
                            </div>
                            <div className="productButtons">
                                <div className="addProduct">
                                    Add to cart
                                </div>
                                <div className="viewProductDetails">
                                    View details
                                </div>
                            </div> 
                        </div>
                        <div className="productWrapper">
                            
                            <div className="productImageWrapper">
                                <img src={allProducts[4].image[0]}></img>
                                
                            </div>
                            <div className="productInfo">
                                <h3>{allProducts[4].name}</h3> 
                                <h3>€{allProducts[4].price}</h3>
                            </div>
                            <div className="productButtons">
                                <div className="addProduct">
                                    Add to cart
                                </div>
                                <div className="viewProductDetails">
                                    View details
                                </div>
                            </div> 
                        </div>

                      
                    </div> */}
                </section>
            
            </div>
        </div>
    )
}

export default Shop