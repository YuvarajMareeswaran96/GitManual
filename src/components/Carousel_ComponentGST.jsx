import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselComponentGST.css';
import Image54 from '../assets/Image54.png';
import Image55 from '../assets/Image55.png';
import Image56 from '../assets/Image56.png';
import Image57 from '../assets/Image57.png';
import Image58 from '../assets/Image58.png';
import Image59 from '../assets/Image59.png';

function CarouselComponentGST() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image54}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <p>Git Stash</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image55}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <p>Option 1</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image56}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <p>Option 2</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image57}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <p>keep/save multiple stashes</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image58}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <p>Apply and Pop</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image59}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <p>Apply/Pop and restore staged (--index)</p>
          <p>Apply/Pop all as unstaged</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselComponentGST;