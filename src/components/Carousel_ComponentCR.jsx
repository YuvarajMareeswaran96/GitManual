import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselComponentCR.css';
import Image06 from '../assets/Image06.jpg';
import Image07 from '../assets/Image07.jpg';
import Image08 from '../assets/Image08.jpg';

function CarouselComponentCR() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image06}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 1</h3>
          <p>Click the "+" icon in the top-right corner</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image07}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 2</h3>
          <p>Follow the Instructions</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image08}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 3</h3>
          <p>Repository Successfully Created</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselComponentCR;