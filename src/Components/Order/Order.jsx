import React from 'react';
import { useLocation } from 'react-router-dom';
import './Order.css'; 

const Order = () => {
  const location = useLocation();
  const order = location.state ? location.state.order : null;

  if (!order) {
    return <div>No order details available.</div>;
  }
<br></br>
  return (
    <div className="container">
      <div className="order-wrapper">
        <h1>Order complete</h1>
        <h2>Thank you for your order!</h2>
        <p> We'll be shipping it to you as soon as possible!</p>
        <div>
          <h3>Order Details:</h3>
          <p>Order ID: {order._id}</p>
          <p>Name: {order.name} {order.lastname}</p>
          <p>Email: {order.email}</p>
          <p>Address: {order.address}</p>
          <p>City: {order.city}</p>
          <p>Country: {order.country}</p>
          <p>Zip: {order.zip}</p>
          <h4>Products:</h4>
          <ul>
            {order.products.map((product, index) => (
              <li key={index}>
                {product.name} - {product.quantity} x {product.price} kr (Total: {product.totalPrice} kr)
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Order;
