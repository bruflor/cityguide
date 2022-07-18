import { SearchBar } from "../searchBar/SearchBar";
import { FooterContainer } from "./style";

export const Footer = () => {
  return (
    <FooterContainer>
      <SearchBar WhiteBar={false} />
    </FooterContainer>
  );
};
