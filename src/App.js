import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewNavbar from './Components/Navbar/NewNavbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import ProductPage from './Pages/ProductPage';
import Cart from './Pages/Cart';
import Computers from './Pages/Computers';
import Sound from './Pages/Sound';
import Televisions from './Pages/Televisions';
import Gaming from './Pages/Gaming';
import Footer from './Components/Footer/Footer';
import ShopContextProvider from './Context/ShopContext';
import Checkout from './Components/Checkout/Checkout';
import Order from './Components/Order/Order';
import GenericInfoPage from './Pages/GenericInfo';
import Phones from './Pages/Phones';
import Admin from './Pages/Admin';
import OrderDetails from './Components/Admin/Orderdetails';


function App() {
  return (
    <Router>
      <ShopContextProvider>
        <div>
          <NewNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/computers" element={<Computers />} />
            <Route path="/sound" element={<Sound />} />
            <Route path="/televisions" element={<Televisions />} />
            <Route path="/gaming" element={<Gaming />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order" element={<Order />} />
            <Route path="/generic-info" element={<GenericInfoPage />} />
            <Route path="/Phones" element={<Phones />} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/order/:orderId" element={<OrderDetails />} />
          </Routes>
          <Footer />
        </div>
      </ShopContextProvider>
    </Router>
  );
}

export default App;
