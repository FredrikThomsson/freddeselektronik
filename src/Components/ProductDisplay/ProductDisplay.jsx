import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const {product} = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">

        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-old">
              {props.old_price !== null && props.old_price !== undefined && (
                <>
                  {props.old_price}kr
                </>
              )}
              </div>
        <div className="productdisplay-right-price-new">{product.new_price}kr </div>
        </div>
        <div className="productdisplay-right-description"></div>
        <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
      </div>
      
    </div>
  )
}

export default ProductDisplay
