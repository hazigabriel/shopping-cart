import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import Homepage from './components/homepage/homepage.js';
import Shop from './components/shop/shop.js';
import Checkout from "./components/cart/cart.js";
import ItemDetail from "./components/itemDetail/itemDetail.js";


function App() {
  
  const [cartItems, setCartItems] = useState(['toBeDisregarded']); //set first item to a placeholder due a bug where the first cart item can be added twice, 

  return (
    <div className="App">
     <BrowserRouter>
        <Navbar cartItems={cartItems} />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/shop" element={<Shop cartItems={cartItems} setCartItems={setCartItems} />}></Route>
            <Route path="shop/:id" element={<ItemDetail />}></Route>
            <Route path="/checkout" element={<Checkout cartItems={cartItems}/>}></Route>
          </Routes>
        
      </BrowserRouter>
       
    </div>
  );
}

export default App;
