import "./itemDetail.css"
import allProducts from "../../data/allProducts"
import { useState, useEffect } from "react";

function ItemDetail(props) {
    const [carouselImgIndex, setCarouselImgIndex] = useState(0);
    useEffect(() => {
        setCarouselImgIndex(0)
    }, [])
    
    function addProductToCart() {
        let productQuantity = parseInt(document.querySelector(".productQuantity").value);
        props.addToCart(props.individualProduct, productQuantity)
     
    }

    function checkIfQuantityIsEligible() {
        //ensure itemQualit is between 1 and 99
        let productQuantity = document.querySelector(".productQuantity");
        if(productQuantity.value < 1) {
            productQuantity.value = 1;
        } else if(productQuantity.value > 99) {
            productQuantity.value = 99
        }
     
    }

    function increaseQuantity() {
        let productQuantity = document.querySelector(".productQuantity");
        productQuantity.value = parseInt(productQuantity.value) +  1;
        checkIfQuantityIsEligible()
    }
    function decreaseQuantity() {
        let productQuantity = document.querySelector(".productQuantity");
        productQuantity.value = parseInt(productQuantity.value) -  1;
        checkIfQuantityIsEligible()
    }


    function imageCarousel(){
        //if the passed object has more than 1 image we add arrows to cycle between images
        if(props.individualProduct.image.length > 1) {
            return (
                <div className="imageCarousel">
                    <p className="prevImage" onClick={handleCarousel}>{"<"}</p>
                    <img src={props.individualProduct.image[0]}></img>
                    <p className="nextImage" onClick={handleCarousel}>{">"}</p>
                </div>
            )
        } else {
            return (
                <div className="imageCarousel">
                    <p></p>
                    <img src={props.individualProduct.image[0]}></img>
                    
                </div>
            )
        }
       
    }

    function handleCarousel(e) {
        let carouselImages = props.individualProduct.image;
        let imageSource = e.target.parentElement.querySelector("img");
        let tempIndex = carouselImgIndex;
      
         if(e.target.innerHTML == "&gt;") { //this is > 
            if(carouselImages[tempIndex + 1]) {
               
                tempIndex = tempIndex + 1;
                imageSource.src = [carouselImages[tempIndex]]
               
            } 
        } else {
            if(carouselImages[tempIndex - 1]) {
       
                tempIndex = tempIndex - 1;
                imageSource.src = [carouselImages[tempIndex]]
          
            }
        }

        setCarouselImgIndex(tempIndex)
         // >
        //&lt;
    }

    //the following two function are checking if the product has info for page number/material, if the info it's avail it's rendered
    function pageNumber() {
        if(props.individualProduct.pages) {
            return (
                <div className="itemPages">
                    <h3>Pages</h3>
                    <p>{props.individualProduct.pages}</p>
                </div>
            )
        
        }
    }
    function material() {
        if(props.individualProduct.material) {
            return (
                <div className="itemPages">
                    <h3>Material</h3>
                    <p>{props.individualProduct.material}</p>
                </div>
            )
        
        }
    }

    return (
        <div className="gridContainer">
            <div className="gridItem">
                <section className="itemDetailWrapper">
                    <div className="itemLeftColumn">
                        {imageCarousel()}

                        <div className="itemInformation">
                            <h2>{props.individualProduct.name}</h2>
                            {props.individualProduct.description}
                            <div className="itemDetails">
                                <div className="itemDimensions">
                                    <h3>Dimensions</h3>
                                    <p>{props.individualProduct.dimensions}</p>
                                </div>
                                <div className="itemWeigth">
                                    <h3>Weight</h3>
                                    <p>{props.individualProduct.weight}</p>
                                </div>
                                {pageNumber()}
                                {material()}
                            </div>
                        </div>
                        
                    </div>
                    <div className="itemRightColumn">
                        <div className="itemAddWrapper">
                            
                            <h1>€{props.individualProduct.price}</h1>
                            
                            <div className="itemQuantityPicker">
                                <h3>Quantity</h3>
                                <div> 
                                    <h2 onClick={decreaseQuantity}>-</h2>
                                    <input className="productQuantity" type="number" defaultValue={1} min="1" max="99"></input>
                                    <h2 onClick={increaseQuantity}>+</h2>
                                </div>
                            </div>

                            <div className="addItemButton" onClick={addProductToCart}>
                                <p>Add to basket</p>
                            </div>
                            
                        </div>
                       
                    </div>
                </section>
            </div>
        </div>
    )
} 
export default ItemDetail