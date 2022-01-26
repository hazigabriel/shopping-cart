import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import Homepage from './components/homepage/homepage.js';
import Shop from './components/shop/shop.js'
import Checkout from "./components/cart/cart.js"
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
        
      </BrowserRouter>
       
    </div>
  );
}

export default App;
