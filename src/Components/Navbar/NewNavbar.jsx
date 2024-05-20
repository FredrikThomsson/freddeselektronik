import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import cart_icon from '../Assets/images/shopping-cart.png';
import { ShopContext } from '../../Context/ShopContext';
import './Navbar.css';
import logo from '../Assets/images/logo.png';
import Login from '../Login/Login';
import Logout from '../Login/Logout';
import Profile from '../Profile/Profile';

function BasicExample() {
  const { cartItems } = useContext(ShopContext);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    // Calculate total quantity in cart
    const totalQuantity = Object.values(cartItems).reduce((acc, val) => acc + val, 0);
    setCartQuantity(totalQuantity);
  }, [cartItems]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <div className="nav-logo">
        <img id="logo" src={logo} alt="logo" />
        <Navbar.Brand as={Link} to="/">FreddesElektronik</Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <NavDropdown title="Products" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/products">All products</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/computers">Computers</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/televisions">Televisions</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/sound">Sound</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/gaming">Gaming</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/phones">Phones</NavDropdown.Item>
          </NavDropdown>
       
          <Profile />
       
          
        </Nav>
   
        <Login/>
        <div className="nav-login-cart">
          <Link to="/cart">
            <img id="cart" src={cart_icon} alt="cart" />
          </Link>
          <div className="nav-cart-count">{cartQuantity}</div>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default BasicExample;


