import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import Homepage from './components/homepage/homepage.js';
import Shop from './components/shop/shop.js';
import Cart from "./components/cart/cart.js";
import ItemDetail from "./components/itemDetail/itemDetail.js";
import allProducts from './data/allProducts';

function App() {
  
  const [cartProducts, setCartProducts] = useState([])
  const [individualProduct, setIndividualProduct] = useState()

    let addToCart = async (product, quantity) => {
    let newCartProducts = cartProducts
    let currentProductIndex;

    if(cartProducts.length == 0 ) {
      cartProducts.push([product, quantity])
    } else {
      const wasItemAdded =  cartProducts.find((item, index)=> {
          currentProductIndex = index
          return item[0].id === product.id
      })

      if(wasItemAdded) {
        newCartProducts[currentProductIndex][1] += quantity
      } else {
        newCartProducts.push([product, quantity])
      }
       
      await setCartProducts(newCartProducts)
      console.log(cartProducts)
    }
  }

  return (
    <div className="App">
     <BrowserRouter>
        <Navbar   />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/shop" element={
              <Shop 
                cartProducts={cartProducts} 
                setCartProducts={setCartProducts} 
                addToCart={addToCart} 
                individualProduct={individualProduct}
                setIndividualProduct={setIndividualProduct}
              />}>
            </Route>
            <Route path="shop/:id" element={
              <ItemDetail  
                individualProduct={individualProduct}
                addToCart={addToCart} 
              />}>
            </Route>
            <Route path="/cart" element={<Cart cartProducts={cartProducts} setCartProducts={setCartProducts} /> }></Route>
          </Routes>
        
      </BrowserRouter>
       
    </div>
  );
}

export default App;
