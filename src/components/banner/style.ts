import styled from "styled-components";

export const BannerSlider = styled.div`
  height: 400px;
  width: 100vw;
  position: relative;
  margin: auto;
  overflow: hidden;
`;

export const ArrowsContainer = styled.div`
  .next {
    right: 0;
    border-radius: 5px 0px 0px 5px;
  }
  .prev,
  .next {
    color: transparent;
    cursor: pointer;
    z-index: 100;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 1rem;
    margin-top: -3rem;
    font-size: 40px;
    font-weight: bold;
    border-radius: 0px 5px 5px 0px;
  }
`;

// &:hover .prev,
// .slider-container:hover .next {
//   color: black;
// }

// .slider-container:hover .prev:hover,
// .slider-container:hover .next:hover {
//   color: white;
//   background-color: rgba(0, 0, 0, 0.6);
//   transition: all 0.5s ease-in;
// }

// .slider-container:hover .dot:hover {
//   background-color: rgba(255, 255, 255, 0.5);
// }

// .slider-container:hover .dot {
//   background-color: rgba(0, 0, 0, 0.3);
// }
// .slider-container:hover .active-dot {
//   background-color: rgba(255, 255, 255, 0.5);
// }
//   .play-pause {
//     color: black;
//   }
// .active-dot {
//   background-color: rgba(255, 255, 255, 0.5);
// }

// .all-dots {
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   display: flex;
//   top: 85%;
//   justify-content: center;
//   z-index: 200;
// }

// .dot {
//   cursor: pointer;
//   height: 1.5rem;
//   width: 1.5rem;
//   margin: 0px 3px;
//   background-color: transparent;
//   /* background-color: rgba(0, 0, 0, 0.3); */
//   border-radius: 50%;
//   display: inline-block;
// }

// .active {
//   display: inline-block;
// }

// .inactive {
//   display: none;
// }

// .slides {
//   height: 400px;
//   width: 100vw;
//   position: relative;
// }

// .slide-image {
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   object-fit: cover;
// }

// .slide-title,
// .slide-text {
//   width: 100%;
//   height: 100%;
//   color: white;
//   font-size: 50px;
//   position: absolute;
//   text-align: center;
//   top: 40%;
//   z-index: 10;
// }

// .slide-text {
//   top: 65%;
//   font-size: 2rem;
// }
