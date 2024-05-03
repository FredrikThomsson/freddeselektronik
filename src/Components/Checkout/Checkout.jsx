import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './Checkout.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createClient } from '@sanity/client';
import { useNavigate } from 'react-router-dom';
import { fetchOrderId } from '../../api/dataFetcher';

const Checkout = () => {
  const { all_product, cartItems } = useContext(ShopContext);
  const navigate = useNavigate();
  const [nextOrderId, setNextOrderId] = useState(null);
  const [formValid, setFormValid] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0); // State to hold total price

  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zip: '',
    agreedToTerms: false,
    paymentMethod: '', 
    ccName: '', 
    ccNumber: '', 
    ccExpiration: '', 
    ccCVV: '', 
  });

  

  useEffect(() => {
    async function fetchData() {
      const latestOrder = await fetchOrderId();
      setNextOrderId(latestOrder && latestOrder.orderId ? latestOrder.orderId + 1 : 1);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const isValid = formData.name.trim() && 
      formData.lastname.trim() && 
      formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) && // Simple email validation
      formData.address.trim() && 
      formData.city.trim() && 
      formData.country.trim() && 
      formData.zip.trim() &&
      formData.agreedToTerms &&
      formData.ccName.trim() &&
      formData.ccNumber.trim() && 
      formData.ccExpiration.trim() &&
      formData.ccCVV.trim();
    setFormValid(isValid);
  }, [formData]);

  useEffect(() => {
    // Calculate total price
    const total = all_product.reduce((acc, product) => {
      if (cartItems[product.id] > 0) {
        return acc + (product.new_price * cartItems[product.id]);
      }
      return acc;
    }, 0);
    setTotalPrice(total);
  }, [all_product, cartItems]);

  const handleInputChange = (event) => {
    const { id, value, type, checked } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const client = createClient({
    projectId: '0zsmvis5',
    dataset: 'production',
    apiVersion: '2022-01-01',
    token: 'skfiUgvjFxZWFmKIr5z0HoVCRRPqg06u3boBGGeuGSo97cRDsCrxbImKQNdr8Qp3NwrJOjkLC43uw0w36crhnRHmR91Aqno0HRYPSaLGZPiylrO5Pq6JeUb5yq40mN9h1yAqzENS5L29BxAUG1Psko7o4ItlpzxG9DiGOqhMBKw5MkBaqjrE',
    useCdn: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const products = all_product.reduce((acc, product) => {
      if (cartItems[product.id] > 0) {
        acc.push({
          _key: product.id,
          id: product.id,
          name: product.name,
          price: product.new_price,
          quantity: cartItems[product.id],
          totalPrice: product.new_price * cartItems[product.id],
        });
      }
      return acc;
    }, []);

    // Merge formData with product data and orderId
    const finalData = {
      ...formData,
      products: products,
      orderId: nextOrderId,
    };

    try {
      const response = await client.create({
        ...finalData,
        _type: 'order',
      });
      console.log('Order created:', response);
      e.target.reset();
      navigate('/order', { state: { order: response } });
    } catch (error) {
      console.error('Error creating order:', error.message);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div>
                  <img src={e.image} alt="" width="50px" height="50px" />
                  <p>{e.name}</p>
                  <p>{e.new_price}kr</p>
                  <p className='quantity'> x{cartItems[e.id]}</p>
                  <p>Total: {e.new_price * cartItems[e.id]}kr </p>
                </div>
              </div>
            );
          }
          return null;
        })}

<p className="total-price">Total Price: {totalPrice}kr</p>


        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              value={formData.name}
              onChange={handleInputChange} 
              style={{ maxWidth: '300px' }} />
          </Form.Group>

          <Form.Group controlId="lastname">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              value={formData.lastname}
              onChange={handleInputChange} 
              style={{ maxWidth: '300px' }} />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange} 
              style={{ maxWidth: '300px' }} />
          </Form.Group>

          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              value={formData.address}
              onChange={handleInputChange} 
              style={{ maxWidth: '300px' }} />
          </Form.Group>

          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              value={formData.city}
              onChange={handleInputChange} 
              style={{ maxWidth: '300px' }} />
          </Form.Group>

          <Form.Group controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter country"
              value={formData.country}
              onChange={handleInputChange} 
              style={{ maxWidth: '300px' }} />
          </Form.Group>

          <Form.Group controlId="zip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter zip"
              value={formData.zip}
              onChange={handleInputChange} 
              style={{ maxWidth: '300px' }} />
          </Form.Group>

          <Form.Group controlId="agreedToTerms">
            <Form.Check
              type="checkbox"
              label="I have read and agree to the website terms and conditions"
              checked={formData.agreedToTerms}
              onChange={handleInputChange} 
              style={{ maxWidth: '300px' }} />
          </Form.Group>

          <h4 className="mb-3">Payment</h4>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="cc-name">Name on card</label>
              <input type="text" className="form-control" id="ccName" value={formData.ccName} onChange={handleInputChange} placeholder="" required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="cc-number">Credit card number</label>
              <input type="text" className="form-control" id="ccNumber" value={formData.ccNumber} onChange={handleInputChange} placeholder="" required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-3">
              <label htmlFor="cc-expiration">Expiration</label>
              <input type="text" className="form-control" id="ccExpiration" value={formData.ccExpiration} onChange={handleInputChange} placeholder="" required />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="cc-cvv">CVV</label>
              <input type="text" className="form-control" id="ccCVV" value={formData.ccCVV} onChange={handleInputChange} placeholder="" required />
            </div>
          </div>

          <Button variant="primary" type="submit" disabled={!formValid} className="button-margin"> Place order</Button>
          <br></br>

        </Form>
          <p>(If the button isn't responding please check if the form is filled correctly.)</p>

      </div>
    </div>
  );
};

export default Checkout;
