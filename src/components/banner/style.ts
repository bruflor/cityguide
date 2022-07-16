import styled from "styled-components";
import img1 from "../../assets/1.jpg";

export const BannerSlider = styled.div`
  height: 400px;
  background-image: url(${img1});
  padding: 0;
  text-align: center;
  align-content: center;
  position: relative;

  & > div {
    height: 400px;
    position: absolute;
    z-index: 0;
  }

  & > .active {
    z-index: 10;
    background: rebeccapurple;
    display: block;
    width: 100%;
  }
`;
