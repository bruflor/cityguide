import { CardContainer, Container } from "./style";
import category1 from "../../assets/c1.jpg";
import category2 from "../../assets/c2.jpg";
import category3 from "../../assets/c3.jpg";
import category4 from "../../assets/c4.jpg";
import category5 from "../../assets/c5.jpg";
import category6 from "../../assets/c6.jpg";

const dummyCategory = [
  {
    url: category1,
    title: "Categoria 1",
  },
  {
    url: category2,
    title: "Categoria 2",
  },
  {
    url: category3,
    title: "Categoria 3",
  },
  {
    url: category4,
    title: "Categoria 4",
  },
  {
    url: category5,
    title: "Categoria 5",
  },
  {
    url: category6,
    title: "Categoria 6",
  },
];

export const Cards = () => {
  return (
    <Container>
      {dummyCategory.map((props) => {
        return (
          <CardContainer>
            <img />
            <div>
              <h2>{props.title}</h2>
              <p hidden></p>
            </div>
          </CardContainer>
        );
      })}
    </Container>
  );
};
