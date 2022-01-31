import {Link } from "react-router-dom"
import allProducts from "../../../data/allProducts"
import books from "../../../data/books"
import jewellery from "../../../data/jewellery"
import replicas from "../../../data/replicas"
import { useState } from "react"

function Products(props) {
    const {products } = props 
    const [individualProduct, setIndividualProduct] = useState() 
    const temp = individualProduct;

    function updateDisplayedProduct(e) {
        const elementIndex = e.target.parentElement.parentElement.parentElement.id
        let temp;
        allProducts.forEach((item) =>{ 
            if(item.id == elementIndex) {
                temp = item
            }
        })
        // console.log(temp)
        props.setIndividualProduct(temp)
    }

    
    let productsToBeRendered;
    if(products == "All Items") {
        productsToBeRendered = allProducts;
    } else if(products == "Books") {
        productsToBeRendered = books
    } else if(products == "Jewellery") {
        productsToBeRendered = jewellery
    } else {
        productsToBeRendered = replicas
    }
     
    return(
        <div className="shopContent">
            {productsToBeRendered.map(product => (
                <div className="productWrapper" key={product.id} id={product.id}>
                    <Link onClick={updateDisplayedProduct} to={`/shop/${product.id }`}>
                        <div className="productImageWrapper">
                            <img src={product.image[0]}></img>
                        </div>
                    </Link>
                    <div className="productInfo">
                        <h3>{product.name}</h3> 
                        <h3>€{product.price}</h3>
                    </div>
                    <div className="productButtons">
                        <div className="addProduct" onClick={props.addItem}>
                            Add to cart
                        </div>
                        <Link onClick={updateDisplayedProduct} to={`/shop/${product.id }`}>
                            <div className="viewProductDetails">
                                View details
                            </div>
                        </Link>
                    </div> 
                </div>
            ))}
        </div>

    ) 
}

export default Products