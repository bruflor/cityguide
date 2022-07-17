// import { ArrowsContainer } from "./style";
import { CaretLeft, CaretRight } from "phosphor-react";

interface IArrows {
  prevSlide: React.MouseEventHandler<HTMLSpanElement>;
  nextSlide: React.MouseEventHandler<HTMLSpanElement>;
}
export const Arrows = ({ prevSlide, nextSlide }: IArrows) => {
  return (
    // <ArrowsContainer>
    <div className="arrows">
      <span className="prev" onClick={prevSlide}>
        <CaretLeft />
      </span>
      <span className="next" onClick={nextSlide}>
        <CaretRight />
      </span>
    </div>
    // </ArrowsContainer>
  );
};
