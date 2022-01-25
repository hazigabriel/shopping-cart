import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import Homepage from './components/homepage/homepage';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
             
         
          </Routes>
        
      </BrowserRouter>
       
    </div>
  );
}

export default App;
