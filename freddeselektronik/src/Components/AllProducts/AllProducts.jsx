import React from 'react';
import './AllProducts.css';
import all_products from '../Assets/all_product'; // Assuming your data is in a separate file
import Item from '../Item/Item';

const AllProducts = () => {
  // Assuming your product data is imported directly or obtained from an API
  const allProducts = all_products;

  return (
    <div className="products">
      {allProducts.map((item, i) => (
        <Item
          key={i}
          id={item.id}
          name={item.name}
          image={item.image}
          new_price={item.new_price}
          old_price={item.old_price}
        />
      ))}
    </div>
  );
};

export default AllProducts;
