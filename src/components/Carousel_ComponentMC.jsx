import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselComponentMC.css';
import Image48 from '../assets/Image48.png';
import Image49 from '../assets/Image49.png';
import Image50 from '../assets/Image50.png';
import Image51 from '../assets/Image51.png';
import Image52 from '../assets/Image52.png';

function CarouselComponentMC() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image48}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 1</h3>
          <p>If we have a merge conflicts we got a message like this</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image49}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 2</h3>
          <p>In, Git Changes window shows a list of files with conflicts under Unmerged Changes</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image50}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 3</h3>
          <p>Use the check boxes or result window, we manually resolve the conflicts</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image51}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 4</h3>
          <p>Once Conflicts cleared, click Accept Merge</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image52}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 5</h3>
          <p>Then Give a merge message and click Commit Staged</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselComponentMC;