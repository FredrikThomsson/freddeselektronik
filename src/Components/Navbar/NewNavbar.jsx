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
        <Navbar.Brand href="/">FreddesElektronik</Navbar.Brand>
      </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="/products">All products</NavDropdown.Item>
              <NavDropdown.Item href="/computers">Computers</NavDropdown.Item>
              <NavDropdown.Item href="/televisions">Televisions</NavDropdown.Item>
              <NavDropdown.Item href="/sound">Sound</NavDropdown.Item>
              <NavDropdown.Item href="/gaming">Gaming</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="nav-login-cart">
            <button><Link to="/login">Login</Link></button>
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


