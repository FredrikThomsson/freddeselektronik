import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchOrderById, updateOrder } from '../../api/dataFetcher'; // adjust the import path as needed

const OrderDetails = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [shipped, setShipped] = useState(false);
  const navigate = useNavigate(); // Import useNavigate from 'react-router-dom'

  useEffect(() => {
    const getOrder = async () => {
      const fetchedOrder = await fetchOrderById(orderId);
      setOrder(fetchedOrder);
      // Set the initial values for processing and shipped checkboxes
      setProcessing(fetchedOrder.processing || false);
      setShipped(fetchedOrder.shipped || false);
    };

    getOrder();
  }, [orderId]);

  const handleGoBack = () => {
    navigate('/admin'); // Navigate to the /admin route
  };

  const handleProcessingChange = () => {
    const updatedOrder = { ...order, processing: !processing };
    updateOrder(orderId, updatedOrder); // Call API to update order with new processing value
    setProcessing(!processing); // Update local state for checkbox
  };

  const handleShippedChange = () => {
    const updatedOrder = { ...order, shipped: !shipped };
    updateOrder(orderId, updatedOrder); // Call API to update order with new shipped value
    setShipped(!shipped); // Update local state for checkbox
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
      <div>
        <h4>Order status:</h4>
        <p>It may take a few minutes before the order status is updated in the database</p>
        <label>
          Processing:
          <input type="checkbox" checked={processing} onChange={handleProcessingChange} />
        </label>
      </div>
      <div>
        <label>
          Shipped:
          <input type="checkbox" checked={shipped} onChange={handleShippedChange} />
        </label>
      </div>
      <button onClick={handleGoBack}>Go Back to Admin</button>
    </div>
  );
};

export default OrderDetails;
