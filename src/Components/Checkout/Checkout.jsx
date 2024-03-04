import React, { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './Checkout.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import sanityClient from '@sanity/client';
import { createClient } from '@sanity/client';



const Checkout = () => {
    const { all_product, cartItems } = useContext(ShopContext);


    const client = createClient({
        projectId: '0zsmvis5',
        dataset: 'production',
        apiVersion: '2022-01-01', 
        token: 'skfiUgvjFxZWFmKIr5z0HoVCRRPqg06u3boBGGeuGSo97cRDsCrxbImKQNdr8Qp3NwrJOjkLC43uw0w36crhnRHmR91Aqno0HRYPSaLGZPiylrO5Pq6JeUb5yq40mN9h1yAqzENS5L29BxAUG1Psko7o4ItlpzxG9DiGOqhMBKw5MkBaqjrE',
        useCdn: true, 
      });
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            email: e.target.email.value,
            address: e.target.address.value,
            city: e.target.city.value,
            country: e.target.country.value,
            zip: e.target.zip.value,
            agreedToTerms: e.target.agreedToTerms.checked,
        };
    
        // Send data to Sanity
        try {
            const response = await client.create({
                ...formData,
                _type: 'order', // Ensure this matches your Sanity schema name
            });
            console.log('Order created:', response);
            // Clear form after successful submission
            e.target.reset();
        } catch (error) {
            console.error('Error creating order:', error.message);
        }
    };
    
    

  return (
    <div>
       {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
            <div >
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

      <div></div>   

      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="email">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="address">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="Enter address" />
  </Form.Group>

  <Form.Group controlId="city">
    <Form.Label>City</Form.Label>
    <Form.Control type="text" placeholder="Enter city" />
  </Form.Group>

  <Form.Group controlId="country">
    <Form.Label>Country</Form.Label>
    <Form.Control type="text" placeholder="Enter country" />
  </Form.Group>

  <Form.Group controlId="zip">
    <Form.Label>Zip</Form.Label>
    <Form.Control type="text" placeholder="Enter zip" />
  </Form.Group>

  <Form.Group controlId="agreedToTerms">
    <Form.Check type="checkbox" label="I have read and agree to the website terms and conditions" />
  </Form.Group>

    

     

                <Button variant="primary" type="submit">
                  Place order
                </Button>
    </Form>



    </div>
  )
}

export default Checkout
