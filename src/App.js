import React from 'react';
import './App.css';
import MyApp from './components/MyApp';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="MyApp">
      <Router>
        <Routes>
          <Route path="/" element={<MyApp />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;