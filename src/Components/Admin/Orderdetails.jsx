import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchOrderById } from '../../api/dataFetcher'; // adjust the import path as needed

const OrderDetails = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const navigate = useNavigate(); // Import useNavigate from 'react-router-dom'

  useEffect(() => {
    const getOrder = async () => {
      const fetchedOrder = await fetchOrderById(orderId);
      setOrder(fetchedOrder);
    };

    getOrder();
  }, [orderId]);

  const handleGoBack = () => {
    navigate('/admin'); // Navigate to the /admin route
  };

  if (!order) {
    return <div>Loading order details...</div>;
  }

  return (
    <div>
      <h1>Order Details</h1>
      <p>Document ID: {order._id}</p>
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
      <button onClick={handleGoBack}>Go Back to Admin</button>
    </div>
  );
};

export default OrderDetails;
