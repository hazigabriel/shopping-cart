import "./shop.css"
import React, {useState, useEffect} from 'react';


function Shop() {

    return (
        <div className="gridContainer  shopGrid">
            <div className="gridItem">
                <section className="shopWrapper">   
                    <div className="categories">
                        <h3 className="cato">category:</h3>
                        
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
                        as
                    </div>
                </section>
            
            </div>
        </div>
    )
}

export default Shop