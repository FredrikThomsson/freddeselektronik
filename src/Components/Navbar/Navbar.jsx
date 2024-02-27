import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/images/logo.png';
import cart_icon from '../Assets/images/shopping-cart.png';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    // Calculate total quantity in cart
    const totalQuantity = Object.values(cartItems).reduce((acc, val) => acc + val, 0);
    setCartQuantity(totalQuantity);
  }, [cartItems]);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img id="logo" src={logo} alt="logo" />
        <p> FreddesElektronik</p>
      </div>
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="nav-login-cart">
        <button><Link to="/login">Login</Link></button>
        <Link to="/cart">
          <img id="cart" src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">{cartQuantity}</div>
      </div>
    </div>
  );
}

export default Navbar;
