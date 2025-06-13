import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselComponentCG.css';
import Image04 from '../assets/Image04.png';
import Image05 from '../assets/Image05.png';

function CarouselComponentCG() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image04}
          alt="Create a Account in Git Hub"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 1</h3>
          <p>Sign Up</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image05}
          alt="Create a Account in Git Hub"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 2</h3>
          <p>Fill all the details and verify the process, then Sign In</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselComponentCG;