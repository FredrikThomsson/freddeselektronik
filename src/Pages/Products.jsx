import React from 'react';
import AllProducts from '../Components/AllProducts/AllProducts';

const Products = () => {
  return (
    <div>
       <h2>All of our Products</h2>

      <AllProducts />

      <h2>Computer Products</h2>
      <AllProducts category="Computer" /> 

      <h2>Television Products</h2>
      <AllProducts category="Television" /> 

      <h2>Soundbar Products</h2>
      <AllProducts category="Soundbar" /> 

      <h2>Gaming Products</h2>
      <AllProducts category="Gaming" /> 


    </div>
  );

  
}

export default Products;
