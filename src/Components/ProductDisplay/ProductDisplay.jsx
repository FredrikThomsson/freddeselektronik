import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';
import Image from 'react-bootstrap/Image';

const ProductDisplay = (props) => {
  const {product} = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <Image src={product.image} height={400} width={500} alt="" />
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            {product.old_price !== null && product.old_price !== undefined && (
              <>
                {product.old_price}kr
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
