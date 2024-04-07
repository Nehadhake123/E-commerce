import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to 
            <h1> {name}</h1>
            <p class="lowercase-paragraph">
            Your ultimate destination for stunning tech finds. Dive into a world where every watch, computer, and phone is a gem waiting to be found. Enjoy an easy, joyful shopping experience that makes us your favorite go-to for all things electronic. Elevate your style and tech game effortlessly with us.
            </p>
            </p>
            <NavLink to='/product' className="some_styles">
              <Button>Show now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;
  
  .lowercase-paragraph {
    text-transform: capitalize;
    text-align: justify;
    word-spacing: -1px; 
    font-weight: bold; /* Makes the text bold */
  letter-spacing: 1px; /* Adjust the spacing between letters */

  }
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .some_styles{
    text-align: justify;

  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
      text-align: justify;
    }

    .intro-data {
      margin-bottom: 0;
      flex-direction: column;
      align-items:flex-start;
      text-align: justify;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;