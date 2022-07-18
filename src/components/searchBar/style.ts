import styled from "styled-components";

export const SearchBoxContainer = styled.div`
  & div {
    border-radius: 8px;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .whiteBar {
    height: 80px;
    width: 60%;
    position: relative;
    margin: auto;
    margin-top: -40px;
    background: #fff;
    box-shadow: 0px 2px 8px #ccc;
    & input {
      color: #4e4e4e;
    }
  }

  .transparentBar {
    height: 50px;
    width: 20%;
    margin: 16px;
    background: #fff1;
    right: 0;
    position: absolute;
    & input {
      color: #cecece;
    }
  }
  & input {
    height: 80%;
    width: 95%;
    padding-left: 16px;
    font-size: 1.5rem;
    border: none;
    background: none;
  }
  & input:focus {
    outline: none;
  }
  & a {
    margin-right: 16px;
    color: #ccc;
  }
  & a:hover {
    cursor: pointer;
  }
`;
