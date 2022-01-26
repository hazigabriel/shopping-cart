import "./shop.css"
import React, {useState, useEffect} from 'react';
import allProducts from "../../data/allProducts"

function Shop() {

    return (
        <div className="gridContainer  shopGrid">
            <div className="gridItem">
                <section className="shopWrapper">   
                    <div className="categories">
                        <h3>category:</h3>
                        
                        <form className="radioButtons">
                            <div className="radio">
                                <label>
                                    <input type="radio" value="option1"  name="category" className="radioButton"     />
                                    <div className="radioButtonDisplayed"></div>
                                    All items
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="option2"  name="category" className="radioButton" />
                                    <div className="radioButtonDisplayed"></div>
                                    Replicas
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="option3" name="category" className="radioButton"  />
                                    <div className="radioButtonDisplayed"></div>
                                    Jewellery
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="option4" name="category" className="radioButton"  />
                                    <div className="radioButtonDisplayed"></div>
                                    Books
                                </label>
                            </div>
                        </form>
                    </div>

                    <div className="shopContent">

                    <div className="productWrapper">
                            
                            <div className="productImageWrapper">
                                <img src={allProducts[12].image[0]}></img>
                                
                            </div>
                            <div className="productInfo">
                                <h3>{allProducts[2].name}</h3> 
                                <h3>€{allProducts[0].price}</h3>
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

                      
                    </div>
                </section>
            
            </div>
        </div>
    )
}

export default Shop