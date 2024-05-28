import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, addToCart, removeAll  } = useContext(ShopContext);

  // Calculate total price
  let totalPrice = 0;
  if (all_product && all_product.length > 0) {
    Object.keys(cartItems).forEach((id) => {
      const item = all_product.find((product) => product.id === parseInt(id));
      if (item) {
        totalPrice += item.new_price * cartItems[id];
      }
    });
  }

  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product && all_product.length > 0 && all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className='cartitems-format'>
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>{e.new_price}kr</p>
                <div className='cartitems-quantity'>
                  <button className="remove-quantity" onClick={() => removeFromCart(e.id)}>-</button>
                  <p className='quantity'>{cartItems[e.id]}</p>
                  <button className="add-quantity" onClick={() => addToCart(e.id)}>+</button>
                </div>
                <p>{e.new_price * cartItems[e.id]}kr </p>
                <button onClick={() => removeAll(e.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                  </svg>
                </button>
              </div>
              <hr />
            </div>
          );
        }
        return null; 
      })}

      <p className="total-price">Total Price: {totalPrice}kr</p>

      <div>
        <Link to="/checkout">
          <Button variant="primary">Proceed to checkout</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartItems;
