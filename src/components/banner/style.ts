import styled from "styled-components";

let slideHeight = "600px";
let slideWidth = "100%";

export const BannerSlider = styled.div`
  box-sizing: border-box;
  margin: 0;
  height: ${slideHeight};
  width: ${slideWidth};
  position: absolute;
  margin: auto;
  overflow: hidden;

  .active {
    display: inline-block;
  }

  .inactive {
    display: none;
  }

  .slides {
    height: ${slideHeight};
    width: ${slideWidth};
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .slide-image {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }

  .slide-title,
  .slide-text {
    width: 100%;
    height: 100%;
    color: white;
    font-size: 50px;
    position: absolute;
    text-align: center;
    top: 40%;
    z-index: 10;
    box-shadow: 5px;
  }

  .slide-text {
    top: 55%;
    font-size: 2rem;
  }

  .prev,
  .next {
    color: transparent;
    cursor: pointer;
    z-index: 100;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 0.5rem;
    margin-top: -3rem;
    font-size: 40px;
    font-weight: bold;
    border-radius: 0px 5px 5px 0px;
  }

  & .prev:hover,
  .next:hover {
    color: black;
  }

  & :hover .prev:hover,
  :hover .next:hover {
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.5s ease-in;
  }

  .next {
    right: 0;
    border-radius: 5px 0px 0px 5px;
  }
  /* 
  .all-dots {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    top: 85%;
    justify-content: center;
    z-index: 200;
  } */

  /* .dot {
    cursor: pointer;
    height: 1.5rem;
    width: 1.5rem;
    margin: 0px 3px;
    background-color: transparent;
    border-radius: 50%;
    display: inline-block;
  } */

  /* &:hover .dot:hover {
    background-color: rgba(255, 255, 255, 0.5);
  } */

  /* .active-dot {
    background-color: rgba(255, 255, 255, 0.5);
  } */
  /* 
  & :hover .dot {
    background-color: rgba(0, 0, 0, 0.3);
  }

  & :hover .active-dot {
    background-color: rgba(255, 255, 255, 0.5);
  } */

  /* .play-pause {
    color: black;
  } */
`;
