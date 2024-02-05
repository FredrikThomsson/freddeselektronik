import React from 'react';
import AllProducts from './AllProducts';

const PopularProducts = () => {
  return (
    <div>
      <h2>Popular Products</h2>
      <AllProducts category="Popular" />
    </div>
  );
};

export default PopularProducts;