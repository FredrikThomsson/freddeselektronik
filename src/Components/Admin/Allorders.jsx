import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchOrders } from '../../api/dataFetcher';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const getOrders = async () => {
      const fetchedOrders = await fetchOrders();
      setOrders(fetchedOrders);
      setFilteredOrders(fetchedOrders);
    };

    getOrders();
  }, []);

  useEffect(() => {
    if (startDate && endDate) {
      const filtered = orders.filter((order) => {
        const orderDate = new Date(order._createdAt);
        return orderDate >= startDate && orderDate <= endDate;
      });
      setFilteredOrders(filtered);
    } else {
      setFilteredOrders(orders);
    }
  }, [startDate, endDate, orders]);

  const handleResetDates = () => {
    setStartDate(null);
    setEndDate(null);
    setFilteredOrders(orders);
  };

  return (
    <div>
      <h1>All Orders</h1>
      <div>
        <label>Start Date: </label>
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
        <label>End Date: </label>
        <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
        <button onClick={handleResetDates}>Reset Dates</button>
      </div>
      {filteredOrders.length === 0 ? (
        <p>No orders found for the selected date range.</p>
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
    </div>
  );
};

export default Orders;
