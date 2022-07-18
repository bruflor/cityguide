import styled from "styled-components";

export const SearchBoxContainer = styled.div`
  height: 80px;
  width: 60%;
  margin: auto;
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0px 2px 8px #ccc;
  margin-top: -40px;
  border-radius: 8px;
  /* padding: 16px; */
  position: relative;

  & input {
    height: 80%;
    width: 95%;
    padding-left: 16px;
    font-size: 1.5rem;
    border: none;
    color: #4e4e4e;
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
