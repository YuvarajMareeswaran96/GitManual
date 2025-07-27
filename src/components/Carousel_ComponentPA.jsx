import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselComponentPA.css';
import Image30 from '../assets/Image30.png';
import Image31 from '../assets/Image31.png';
import Image32 from '../assets/Image32.png';
import Image33 from '../assets/Image33.png';
import Image34 from '../assets/Image34.png';
import Image35 from '../assets/Image35.png';
import Image40 from '../assets/Image40.png';
import Image41 from '../assets/Image41.png';
import Image42 from '../assets/Image42.png';
import Image43 from '../assets/Image43.png';
import Image44 from '../assets/Image44.png';
import Image45 from '../assets/Image45.png';
import Image46 from '../assets/Image46.png';
import Image47 from '../assets/Image47.png';
import Image60 from '../assets/Image60.png';

function CarouselComponentPA() {
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
          <p>Click Pull</p>
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

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image40}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 7</h3>
          <p>Click “Push” to send the changes from working branch to main branch.b </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image41}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 8</h3>
          <p>After successful Push, we get this message</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image42}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 9</h3>
          <p>Go to GitHub, navigate to your repository, and click "Compare & pull request."</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image60}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 10</h3>
          <p>If you set the Reviewer, refer this image for guidance. Otherwise, proceed to the next step.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image43}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 11</h3>
          <p>Enter a title and description, then click "Create pull request."</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image44}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 12</h3>
          <p>Review the PR and click "Merge pull request" if there are no conflicts.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image45}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 13</h3>
          <p>Confirm the merge to update the main branch.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image46}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 14</h3>
          <p>Once Merged, we get like this</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image47}
          alt="Create Repo"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Step 15</h3>
          <p>All the messages/ title entered will be saved for the version of checkin into GitHub.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselComponentPA;