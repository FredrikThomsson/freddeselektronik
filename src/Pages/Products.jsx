import React from 'react';
import AllProducts from '../Components/AllProducts/AllProducts';
import './CSS/Products.css'

const Products = () => {
  return (
    <div>
      <h2 className='title'>All of our products</h2>
      <AllProducts />

      <h2>Computer products</h2>
      <AllProducts category="Computer" /> 

      <h2>Television Products</h2>
      <AllProducts category="Television" /> 

      <h2>Soundbar Products</h2>
      <AllProducts category="Soundbar" /> 

      <h2>Gaming Products</h2>
      <AllProducts category="Gaming" /> 

      <h2>Phone Products</h2>
      <AllProducts category="Phones" /> 


    </div>
  );

  
}

export default Products;
