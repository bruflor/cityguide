import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: space-evenly;
  margin: 16px;
  & div {
    background: red;
    height: 200px;
    width: 400px;
  }
`;
