import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselComponent.css';
import Image01 from '../assets/Image01.png';
import Image02 from '../assets/Image02.png';
import Image03 from '../assets/Image03.png';

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image01}
          alt="Download Git"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 1</h3>
          <p>Download Git and Run the Installer</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image02}
          alt="Download Git"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 2</h3>
          <p>Download Git and Run the Installer</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image03}
          alt="Verification"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 3 - Verify</h3>
          <p>After successful installation, open your cmd type a word git</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselComponent;