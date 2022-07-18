import styled from "styled-components";

export const Container = styled.section`
  width: 920px;
  height: 100%;
  margin: auto;
  align-content: center;
  /* background-color: red; */
`;

export const CardContainer = styled.div`
  display: inline-block;
  margin: 32px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0px 2px 8px #ccc;
  height: 260px;
  width: 240px;
  transition: 200ms;
  text-align: center;

  &:hover {
    cursor: pointer;
    background: red;
    transform: translateY(4px);
    transition: 400ms;
  }
  & p,
  h2 {
  }
`;
