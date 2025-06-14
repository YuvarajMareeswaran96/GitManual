import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselComponentDA.css';
import Image36 from '../assets/Image36.png';
import Image37 from '../assets/Image37.png';
import Image38 from '../assets/Image38.png';
import Image39 from '../assets/Image39.png';

function CarouselComponentDA() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image36}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 1</h3>
          <p>Modify, Delete or Add files you needed in Working Branch</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image37}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 2</h3>
          <p>Click "+" Icon to stage your changes</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image38}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 3</h3>
          <p>Enter a proper message, Click Commit Staged</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image39}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 4</h3>
          <p>It Saved locally</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselComponentDA;