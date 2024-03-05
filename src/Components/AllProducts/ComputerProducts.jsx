import React, { useEffect, useState } from 'react';
import AllProducts from './AllProducts';
import { fetchProducts } from '../../api/dataFetcher';
import { urlFor } from '../../lib/sanity';


const ComputerProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProducts();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Computer Products</h2>
      <AllProducts category="Computer" />
 <h1>Products sanity -- test</h1>
      
        {products.map(product => (
          <li key={product._id}>
            <h2>{product.name}</h2>
          
            <p>Price: {product.price}kr</p>
            <img
              src={urlFor(product.image).url()}
              alt={`Image for ${product.name}`}
            />
          </li>
        ))}
      
      
    </div>
  );
};

export default ComputerProducts;
