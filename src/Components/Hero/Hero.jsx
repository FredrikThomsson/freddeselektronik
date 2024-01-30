import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/puter.png'
import laptop1 from '../Assets/laptop1.png'
import tv1 from '../Assets/tv1.png'
import soundbar1 from '../Assets/soundbar1.png'
import AllProducts from '../AllProducts/AllProducts';


const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <div>
          <div>
            <p>Current offers</p>
            <div className='hero-latest-btn'>
              <div> Shop now </div>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img id="hero-img" src={hero_img} alt="" />
      </div>

      
    </div>
  );
}

export default Hero;