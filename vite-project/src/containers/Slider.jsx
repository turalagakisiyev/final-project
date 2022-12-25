import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import img1 from './Images/image1.jpg';
import img2 from './Images/image2.jpg';
import '@splidejs/react-splide/css';



const Slider = () => {
    return (
        <Splide
          options={ {
            rewind: true,
            gap   : '1rem',
          } }
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <img style={{width:"100%" ,
  height: "auto"}} src={img1} alt="Image 1"/>
          </SplideSlide>
          <SplideSlide>
            <img style={{width:"100%" ,
  height: "auto"}} src={img2} alt="Image 2"/>
          </SplideSlide>
        
        </Splide>
      );
}

export default Slider