import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, addToCart } = useContext(ShopContext);

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
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className='cartitems-format'>
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>{e.new_price}kr</p>
                <button className='cartitems-quantity'> {cartItems[e.id]} </button>
                <p>{e.new_price * cartItems[e.id]}kr </p>
                <button onClick={() => removeFromCart(e.id)}>-</button>
                <button onClick={() => addToCart(e.id)}>+</button>
              </div>
              <hr />
            </div>
          );
        }
        return null; // Added to handle the case where the condition is not met
      })}
    </div>
  );
};

export default CartItems;
