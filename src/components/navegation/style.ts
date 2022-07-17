import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  padding-top: 32px;
  align-items: center;
  gap: 20px;
  color: #f2f2f2;

  & > p {
    width: 20%;
    padding-left: 64px;
  }

  & div {
    width: 80%;
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    padding-right: 64px;
  }
`;
