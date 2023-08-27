import React from "react";
import styled from "styled-components";
import disneyViewer from "../images/viewers-disney.png";
import disneyVideo from "../videos/1564674844-disney.mp4";
import starwarsViewer from "../images/viewers-starwars.png";
import starwarsVideo from "../videos/1608229455-star-wars.mp4";
import pixarViewer from "../images/viewers-pixar.png";
import pixarVideo from "../videos/1564676714-pixar.mp4";
import nationalViewer from "../images/viewers-national.png";
import nationalVideo from "../videos/1564676296-national-geographic.mp4";
import marvelViewer from "../images/viewers-marvel.png";
import marvelVideo from "../videos/1564676115-marvel.mp4";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src={disneyViewer}></img>
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src={disneyVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={pixarViewer}></img>
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src={pixarVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={marvelViewer}></img>
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src={marvelVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={starwarsViewer}></img>
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src={starwarsVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={nationalViewer}></img>
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src={nationalVideo} type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
    rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    outline: 3px solid rgb(249, 249, 249, 0.8);
    outline-offset: 3px;

    video {
      opacity: 1;
      transform: scale(1.01);
    }
  }
`;

export default Viewers;
