import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/shopping-cart.png'

const Navbar = () => {

  const [menu,setMenu] = useState("home")
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
        <button>Login</button>
        <img id="cart" src={cart_icon} alt="cart" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
