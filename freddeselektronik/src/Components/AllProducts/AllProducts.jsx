// AllProducts.jsx
import React from 'react';
import './AllProducts.css';
import all_product from '../Assets/all_product'; // Assuming your data is in a separate file
import Item from '../Item/Item';

const AllProducts = ({ category }) => {
  // Assuming your product data is imported directly or obtained from an API
  const all_products = all_product;

  // Filter products based on the specified category
  const filteredProducts = category
    ? all_products.filter((product) => product.category && product.category.includes(category))
    : all_products;

  return (
    <div className="products">
      <div className="product-item">
        {filteredProducts.map((item, i) => (
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
    </div>
  );
};

export default AllProducts;