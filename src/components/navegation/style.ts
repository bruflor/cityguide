import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: absolute;
  display: flex;
  width: 100%;
  /* height: 100px; */
  padding-top: 32px;
  align-items: center;

  /* justify-content: space-between; */
  gap: 20px;
  & > p {
    width: 20%;
    padding-left: 64px;
  }
  & div {
    width: 70%;
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    padding-right: 64px;
  }
`;
