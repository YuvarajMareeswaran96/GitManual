import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselComponentDPD.css';
import Image30 from '../assets/Image30.png';
import Image31 from '../assets/Image31.png';
import Image32 from '../assets/Image32.png';
import Image33 from '../assets/Image33.png';
import Image34 from '../assets/Image34.png';
import Image35 from '../assets/Image35.png';

function CarouselComponentDPD() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image30}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 1</h3>
          <p>Switch to Main Branch click Fetch</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image31}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 2</h3>
          <p>Clcik Pull</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image32}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 3</h3>
          <p>Switch to working branch,“Open the Command Prompt”</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image33}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 4</h3>
          <p>In CMD, type "git pull origin main", Press Enter</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image34}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 5</h3>
          <p>Click View All commits</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image35}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 6</h3>
          <p>Click “Sync” if shown on the IDE of working branch.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselComponentDPD;