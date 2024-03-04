import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './Checkout.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
            // Define values to store in sanity
            name: e.target.name.value,
            lastname: e.target.lastname.value,
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
                _type: 'order', 
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
      <Form.Group controlId="name">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" />
      </Form.Group>

      <Form.Group controlId="lastname">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" />
      </Form.Group>

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



    <h4 class="mb-3">Payment</h4>
                <div class="d-block my-3">
                    <div class="custom-control custom-radio">
                        <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" required=""/>
                        <label class="custom-control-label" for="credit">Credit card</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required=""/>
                        <label class="custom-control-label" for="debit">Debit card</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required=""/>
                        <label class="custom-control-label" for="paypal">PayPal</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="cc-name">Name on card</label>
                        <input type="text" class="form-control" id="cc-name" placeholder="" required=""/>
                       
                 
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="cc-number">Credit card number</label>
                        <input type="text" class="form-control" id="cc-number" placeholder="" required=""/>
                       
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 mb-3">
                        <label for="cc-expiration">Expiration</label>
                        <input type="text" class="form-control" id="cc-expiration" placeholder="" required=""/>
                       
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="cc-cvv">CVV</label>
                        <input type="text" class="form-control" id="cc-cvv" placeholder="" required="" />
                  
                    </div>
                </div>

     
                  <Button variant="primary" type="submit" >Place order</Button> 
       
   
    </Form>



    </div>
  )
}

export default Checkout
