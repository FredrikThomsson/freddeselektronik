import React, { useContext } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ShopContext } from '../../Context/ShopContext';

const Item = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const handleAddToCart = (event) => {
    event.preventDefault(); // Prevent Add to Cart to open Product Display page
    addToCart(props.id);
  };

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`} className="item-link">
        <Card style={{ width: '18rem' }} className="item-card">
          <Card.Img className='item-img' variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <div className="item-prices">
              <div className="item-price-new">
                {props.new_price}kr
              </div>
              <div className="item-price-old">
              {props.old_price !== null && props.old_price !== undefined && (
                <>
                  {props.old_price}kr
                </>
              )}
              </div>
            </div>
            <Button variant="primary" onClick={handleAddToCart} className="add-to-cart">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
      </svg>
    </Button>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default Item;
