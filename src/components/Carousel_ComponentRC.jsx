import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselComponentRC.css';
import Image53 from '../assets/Image53.png';

function CarouselComponentRC() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image53}
          alt="Create a Account in Git Hub"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselComponentRC;