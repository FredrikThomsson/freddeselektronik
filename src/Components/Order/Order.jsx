import React from 'react';
import { useLocation } from 'react-router-dom';

const Order = () => {
  const location = useLocation();
  const order = location.state ? location.state.order : null;

  if (!order) {
    return <div>No order details available.</div>;
  }

  return (
    <div>
      <h1>Order complete</h1>
      <h2>Thank you!</h2>
      <div>
        <h3>Order Details:</h3>
        <p>Order ID: {order.orderId}</p>
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
  );
};

export default Order;
