import "./itemDetail.css"
import allProducts from "../../data/allProducts"
function ItemDetail() {
    return (
        <div className="gridContainer">
            <div className="gridItem">
                <section className="itemDetailWrapper">
                    <div className="itemLeftColumn">
                        <div className="imageCarousel">
                            <p className="prevImage">{"<"}</p>
                            <img src={allProducts[1].image[0]}></img>
                            <p className="nextImage">{">"}</p>
                        </div>

                        <div className="itemInformation">
                            <h2>{allProducts[1].name}</h2>
                            {allProducts[0].description}
                            <div className="itemDetails">
                                <div className="itemDimensions">
                                    <h3>Dimensions</h3>
                                    <p>{allProducts[1].dimensions}</p>
                                </div>
                                <div className="itemWeigth">
                                    <h3>Weight</h3>
                                    <p>{allProducts[1].weight}</p>
                                </div>
                                <div className="itemPages">
                                    <h3>Pages</h3>
                                    <p>{allProducts[1].pages}</p>
                                </div>
                                <div className="itemMaterials">
                                    <h3>Materials</h3>
                                    <p>{allProducts[1].material}</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="itemRightColumn">
                        <div className="itemAddWrapper">
                            
                            <h1>€1600</h1>
                            
                            <div className="itemQuantityPicker">
                                <h3>Quantity</h3>
                                <input type="number" value="1" min="1" max="99    "></input>
                            </div>

                            <div className="addItemButton">
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