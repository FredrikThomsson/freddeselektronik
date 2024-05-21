import React from 'react';
import './AllProducts.css';
import all_product from '../Assets/all_product';
import Item from '../Item/Item';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const AllProducts = ({ category }) => {
  const all_products = all_product;
  const filteredProducts = category
    ? all_products.filter((product) => product.category && product.category.includes(category))
    : all_products;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="products">
      <Carousel responsive={responsive} infinite={true} autoPlay={false} autoPlaySpeed={3000} itemClass="carousel-item-padding" >
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
      </Carousel>
    </div>
  );
};

export default AllProducts;
