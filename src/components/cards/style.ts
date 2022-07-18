import styled from "styled-components";

export const Container = styled.section`
  width: 920px;
  height: 100%;
  margin: auto;
  padding-top: 64px;
  padding-bottom: 64px;
  align-content: center;
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    margin-bottom: 32px;
  }
`;

export const CardContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0px 2px 8px #ccc;
  height: 320px;
  width: 240px;
  min-width: 240px;
  flex: 1;
  overflow: hidden;
  position: relative;

  transition: 200ms;
  text-align: center;

  & img {
    width: auto;
    height: 100%;
    object-fit: cover;
    filter: brightness(85%);
  }

  .content {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: #f2f2f2;
    text-shadow: 0px 0px 4px #4e4e4e;
    background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0), #999);
    backdrop-filter: blur(2px);
  }
  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    transition: 400ms;
    box-shadow: 0px 4px 8px #777;
  }
`;
