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
          <Card.Img variant="top" src={props.image} />
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
            <Button variant="primary" onClick={handleAddToCart} className="add-to-cart"> Add To Cart</Button>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default Item;
