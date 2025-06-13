import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselComponentWB.css';
import Image24 from '../assets/Image24.png';
import Image25 from '../assets/Image25.png';
import Image26 from '../assets/Image26.png';

function CarouselComponentWB() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image24}
          alt="Create a Account in Git Hub"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 1</h3>
          <p>In the solution file, click main branch.Click “New Branch” in the window that opens up.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image25}
          alt="Create a Account in Git Hub"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 2</h3>
          <p>Click "New Branch," give it a name (e.g., "feature-branch"), and click "Create."</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image26}
          alt="Create a Account in Git Hub"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 3</h3>
          <p>Make changes in this branch (Working Branch) to avoid disrupting the main branch.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselComponentWB;