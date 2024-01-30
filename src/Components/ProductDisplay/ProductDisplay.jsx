import React from 'react'
import './ProductDisplay.css'

const ProductDisplay = (props) => {
  const {product} = props;
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">

        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-old">{product.old_price}kr </div>
        <div className="productdisplay-right-price-new">{product.new_price}kr </div>
        </div>
        <div className="productdisplay-right-description"></div>
        <button>Add To Cart</button>
      </div>
      
    </div>
  )
}

export default ProductDisplay
