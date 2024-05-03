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
      
    </div>
  );
};

export default ComputerProducts;
