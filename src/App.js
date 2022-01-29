import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import Homepage from './components/homepage/homepage.js';
import Shop from './components/shop/shop.js';
import Checkout from "./components/cart/cart.js";
import ItemDetail from "./components/itemDetail/itemDetail.js";
import allProducts from './data/allProducts';

function App() {
  
  const [cartItems, setCartItems] = useState(['toBeDisregarded']); //set first item to a placeholder due a bug where the first cart item can be added twice, 
  const [itemsToBeRendered, setItemsToBeRendered] = useState()
  const [totalCartItems, setTotalCartItems] = useState(0)

  useEffect(() => {
 
    let tempItems = [];
    for(let i = 1; i < cartItems.length; i++) {
        for(let e = 0; e < allProducts.length; e++) {
            if(cartItems[i].itemId == allProducts[e].id) {
                tempItems.push([allProducts[e], cartItems[i].quantity]);
            } 
        }
    }
    setItemsToBeRendered(tempItems)
    // console.log(itemsToBeRendered)
  }, [totalCartItems])

  function updateTotalCartItems() {
    //only to be used in the Shop page, when the user adds a new item to the cart the navbar cart quantity increases with 1
    let value = totalCartItems + 1;
    setTotalCartItems(value)  
  }


  return (
    <div className="App">
     <BrowserRouter>
        <Navbar totalCartItems={totalCartItems} />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/shop" element={<Shop cartItems={cartItems} setCartItems={setCartItems} updateTotalCartItems={updateTotalCartItems}/>}></Route>
            <Route path="shop/:id" element={<ItemDetail />}></Route>
            <Route path="/checkout" element={<Checkout cartItems={cartItems} itemsToBeRendered={itemsToBeRendered} setItemsToBeRendered={setItemsToBeRendered} setTotalCartItems={setTotalCartItems}/>}></Route>
          </Routes>
        
      </BrowserRouter>
       
    </div>
  );
}

export default App;
