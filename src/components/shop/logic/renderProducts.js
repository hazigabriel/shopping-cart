import {Link } from "react-router-dom"
import allProducts from "../../../data/allProducts"
import books from "../../../data/books"
import jewellery from "../../../data/jewellery"
import replicas from "../../../data/replicas"

function Products(props) {
    const {products } = props 
     
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
                    <Link to={`/shop/${product.id }`}>
                        <div className="productImageWrapper">
                            <img src={product.image[0]}></img>
                        </div>
                    </Link>
                    <div className="productInfo">
                        <h3>{product.name}</h3> 
                        <h3>€{product.price}</h3>
                    </div>
                    <div className="productButtons">
                        <div className="addProduct">
                            Add to cart
                        </div>
                        <Link to={`/shop/${product.id }`}>
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