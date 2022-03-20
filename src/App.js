import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import Homepage from './components/homepage/homepage.js';
import Shop from './components/shop/shop.js';
import Cart from "./components/cart/cart.js";
import ItemDetail from "./components/itemDetail/itemDetail.js";

function App() {
  
  const [cartProducts, setCartProducts] = useState([])
  const [individualProduct, setIndividualProduct] = useState()
  const [totalCartItems, setTotalCartItems] = useState(0)
  const [isPromoActive, setIsPromoActive] = useState([false, "no discount"])

  const addToCart = (product, quantity) => {
    let newCartProducts = cartProducts
    let currentProductIndex;
      
    
    const wasItemAdded =  cartProducts.find((item, index)=> {
        currentProductIndex = index
        return item[0].id === product.id
    })

    if(wasItemAdded) {
      newCartProducts[currentProductIndex][1] += quantity
    } else {
      newCartProducts.push([product, quantity])
    }
    
    setCartProducts(newCartProducts)
    
  }

  const computeCartQuantity = () => {
    const quantityReducer = (accumulator, currentProdQuantity) => accumulator + currentProdQuantity[1]
    setTotalCartItems(cartProducts.reduce(quantityReducer, 0))
}

  return (
    <div className="App">
     <BrowserRouter>
        <Navbar 
          totalCartItems={totalCartItems}  
        />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/shopping-cart" element={<Homepage />}></Route>
            <Route path="/shopping-cart/shop" element={
              <Shop 
                cartProducts={cartProducts} 
                setCartProducts={setCartProducts} 
                addToCart={addToCart} 
                individualProduct={individualProduct}
                setIndividualProduct={setIndividualProduct}
                computeCartQuantity={computeCartQuantity}  
              />}>
            </Route>
            <Route path="/shopping-cart/shop/:id" element={
              <ItemDetail  
                individualProduct={individualProduct}
                addToCart={addToCart}
                computeCartQuantity={computeCartQuantity} 
                
              />}>
            </Route>
            <Route path="/shopping-cart/cart" element={
              <Cart 
                cartProducts={cartProducts} 
                setCartProducts={setCartProducts}
                computeCartQuantity={computeCartQuantity}  
                isPromoActive={isPromoActive} 
                setIsPromoActive={setIsPromoActive}
                setIndividualProduct={setIndividualProduct}
              /> }>
            </Route>
          </Routes>
        
      </BrowserRouter>
       
    </div>
  );
}

export default App