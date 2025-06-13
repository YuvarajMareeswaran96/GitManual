import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselComponentPR.css";
import Image09 from "../assets/Image09.png";
import Image10 from "../assets/Image10.png";
import Image11 from "../assets/Image11.png";
import Image12 from "../assets/Image12.png";
import Image13 from "../assets/Image13.png";
import Image14 from "../assets/Image14.png";
import Image15 from "../assets/Image15.png";
import Image16 from "../assets/Image16.png";
import Image17 from "../assets/Image17.png";
import Image18 from "../assets/Image18.png";
import Image19 from "../assets/Image19.png";
import Image20 from "../assets/Image20.png";
import Image21 from "../assets/Image21.png";
import Image22 from "../assets/Image22.png";
import Image23 from "../assets/Image23.png";

function CarouselComponentPR() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Image09} alt="Create Repo" />
        <Carousel.Caption className="custom-caption">
          <h3>Step 1</h3>
          <p>
            Open GitHub, navigate to your repository, and copy the HTTPS URL
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Image10} alt="Create Repo" />
        <Carousel.Caption className="custom-caption">
          <p>
            Open Visual Studio, click "Clone a Repository," and paste the URL
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Image11} alt="Create Repo" />
        <Carousel.Caption className="custom-caption">
          <p>Paste the copied url from above step in the repository location</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Image12} alt="Create Repo" />
        <Carousel.Caption className="custom-caption">
          <p>Once the solution is cloned, the visual studio opens up a blank solution. The bottom of the IDE shows the branch (main) and the repository name (MyProject),then Close the Visual Studio</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Image13} alt="Create Repo" />
        <Carousel.Caption className="custom-caption">
          <p>Navigate to the location where a blank clone solution was created, Delete .vs folder.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Image14} alt="Create Repo" />
        <Carousel.Caption className="custom-caption">
          <p>Create a new folder and rename it.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Image15} alt="Create Repo" />
        <Carousel.Caption className="custom-caption">
          <p>Copy all the contents (except .vs) of the existing solution (need to push)</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Image16} alt="Create Repo" />
        <Carousel.Caption className="custom-caption">
          <p>Paste the content in the newly created folder (inside the New Folder)</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Image17} alt="Create Repo" />
        <Carousel.Caption className="custom-caption">
          <p>Add the gitignore file to the solution,Rename gitignore to .gitignore (if the filename is gitignore),Open the solution from the newly created folder.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Image18} alt="Create Repo" />
        <Carousel.Caption className="custom-caption">
          <h3>Step 2</h3>
          <p>Add and Commit Changes</p>
        </Carousel.Caption>
      </Carousel.Item>

       <Carousel.Item>
        <img className="d-block w-100" src={Image19} alt="Create Repo" />
        <Carousel.Caption className="custom-caption">
          <p>Enter a meaningful message , Click "Commit Staged" to save changes locally.</p>
        </Carousel.Caption>
      </Carousel.Item>

       <Carousel.Item>
        <img className="d-block w-100" src={Image20} alt="Create Repo" />
        <Carousel.Caption className="custom-caption">
          <p>We get a message as commit created locally</p>
        </Carousel.Caption>
      </Carousel.Item>

       <Carousel.Item>
        <img className="d-block w-100" src={Image21} alt="Create Repo" />
        <Carousel.Caption className="custom-caption">
          <h3>Step 3</h3>
          <p>Push Changes to GitHub</p>
        </Carousel.Caption>
      </Carousel.Item>

       <Carousel.Item>
        <img className="d-block w-100" src={Image22} alt="Create Repo" />
        <Carousel.Caption className="custom-caption">
          <p>We get a Success message after successfully pushed</p>
        </Carousel.Caption>
      </Carousel.Item>

       <Carousel.Item>
        <img className="d-block w-100" src={Image23} alt="Create Repo" />
        <Carousel.Caption className="custom-caption">
          <p>Refresh GitHub to see the updated repository.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}
export default CarouselComponentPR;
