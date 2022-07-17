import styled from "styled-components";

export const SearchBoxContainer = styled.div`
  height: 48px;
  width: 60%;
  margin: auto;
  display: flex;
  align-items: center;
  background: #fff;
  color: #4e4e4e;
  box-shadow: 0px 2px 8px #ccc;
  font-size: 1.5em;
  margin-top: 16px;
  /* padding: 16px; */

  & input {
    height: 80%;
    width: 95%;
    padding-left: 16px;
    /* background: red; */
    border: none;
  }
  & input:focus {
    outline: none;
  }

  & a:hover {
    cursor: pointer;
  }
`;
