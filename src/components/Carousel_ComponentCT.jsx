import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselComponentCT.css';
import Image27 from '../assets/Image27.png';
import Image28 from '../assets/Image28.png';
import Image29 from '../assets/Image29.png';

function CarouselComponentCT() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image27}
          alt="Create a Account in Git Hub"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 1</h3>
          <p>Click Settings, it will navigate to Settings Page</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image28}
          alt="Create a Account in Git Hub"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 2</h3>
          <p>Go to "Settings" &gt; "Collaborators" &gt; "Add People."</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image29}
          alt="Create a Account in Git Hub"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 3</h3>
          <p>Click Add People, Enter the GitHub username of the team member and confirm.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselComponentCT;