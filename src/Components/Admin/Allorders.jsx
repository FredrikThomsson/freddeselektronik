import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchOrders, deleteOrder } from '../../api/dataFetcher';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button from react-bootstrap

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [showProcessing, setShowProcessing] = useState(false); // State to toggle processing filter
  const [showShipped, setShowShipped] = useState(false); // State to toggle shipped filter

  useEffect(() => {
    const getOrders = async () => {
      const fetchedOrders = await fetchOrders();
      setOrders(fetchedOrders);
      setFilteredOrders(fetchedOrders);
    };

    getOrders();
  }, []);

  useEffect(() => {
    let filtered = orders;

    if (startDate && endDate) {
      filtered = filtered.filter((order) => {
        const orderDate = new Date(order._createdAt);
        return orderDate >= startDate && orderDate <= endDate;
      });
    }

    if (showProcessing) {
      filtered = filtered.filter(order => order.processing);
    }

    if (showShipped) {
      filtered = filtered.filter(order => order.shipped);
    }

    setFilteredOrders(filtered);
  }, [startDate, endDate, orders, showProcessing, showShipped]);

  const handleResetDates = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const handleDeleteAll = async () => {
    try {
      const deletePromises = filteredOrders.map(order => deleteOrder(order._id));
      await Promise.all(deletePromises);
      setOrders(orders.filter(order => !filteredOrders.includes(order)));
      setFilteredOrders([]);
      setShowModal(false); // Close modal after deletion
    } catch (error) {
      console.error('Failed to delete orders:', error);
    }
  };

  const handleShowModal = () => setShowModal(true); // Show modal
  const handleCloseModal = () => setShowModal(false); // Close modal without deleting

  return (
    <div>
      <h1>All Orders</h1>
      <div>
        <label>Start Date: </label>
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
        <label>End Date: </label>
        <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
        <button onClick={handleResetDates}>Reset Dates</button>
        <button onClick={handleShowModal}>Delete All Displayed Orders</button>
      </div>
      <div>
        <label>Show Processing: </label>
        <input
          type="checkbox"
          checked={showProcessing}
          onChange={() => setShowProcessing(!showProcessing)}
        />
      </div>
      <div>
        <label>Show Shipped: </label>
        <input
          type="checkbox"
          checked={showShipped}
          onChange={() => setShowShipped(!showShipped)}
        />
      </div>
      {filteredOrders.length === 0 ? (
        <p>No orders found for the selected criteria.</p>
      ) : (
        <ul>
          {filteredOrders.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt)).map((order) => (
            <li key={order._id}>
              <Link to={`/order/${order._id}`}>
                <h2>Order ID: {order._id}</h2>
                <p>Created At: {new Date(order._createdAt).toLocaleString()}</p>
                {/* Add more fields as necessary */}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete these orders?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Go Back</Button>
          <Button variant="danger" onClick={handleDeleteAll}>Yes, Delete</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Orders;
