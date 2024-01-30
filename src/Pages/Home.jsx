// Home.jsx
import React from 'react';
import Hero from '../Components/Hero/Hero';
import AllProducts from '../Components/AllProducts/AllProducts';

const Home = () => {
  return (
    <div>
      <Hero />

     
      <h2>Soundbar Products</h2>
      <AllProducts category="Popular" />
    </div>
  );
};

export default Home;
