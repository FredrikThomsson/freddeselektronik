import React from 'react';

function ExampleCarouselImage({ src, text }) {
    return (
      <img
        className="d-block w-100"
        src={src}
        alt={text}
      />
    );
  }

export default ExampleCarouselImage;
