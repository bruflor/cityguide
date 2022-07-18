import { MagnifyingGlass } from "phosphor-react";
import { SearchBoxContainer } from "./style";

export const SearchBar = () => {
  return (
    <SearchBoxContainer>
      <input></input>
      <a>
        <MagnifyingGlass size={48} />
      </a>
    </SearchBoxContainer>
  );
};
