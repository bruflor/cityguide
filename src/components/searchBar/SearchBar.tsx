import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { SearchBoxContainer } from "./style";

interface IProps {
  WhiteBar: boolean;
}

export const SearchBar = ({ WhiteBar }: IProps) => {
  return (
    <SearchBoxContainer>
      <div className={WhiteBar ? "whiteBar" : "transparentBar"}>
        <input></input>
        <a>
          <MagnifyingGlass size={32} />
        </a>
      </div>
    </SearchBoxContainer>
  );
};
