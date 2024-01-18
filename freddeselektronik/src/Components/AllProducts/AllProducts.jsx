import React from 'react'
import './AllProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const AllProducts = () => {
  return (
    <div className="products">
      <div className="product-item">
        {data_product.map((item, i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default AllProducts