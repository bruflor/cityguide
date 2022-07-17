import { useEffect, useState } from "react";
import { SliderContent } from "./SliderContent";
import { Arrows } from "./Arrows";
import imageSlider from "./imageSlider";
import { Dots } from "./Dots";

import "./styles.css";

// import { BannerSlider } from "./style";

const len = imageSlider.length - 1;

export const Banner = (props: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    // <BannerSlider>
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        imageSlider={imageSlider}
        onClick={(activeIndex: any) => {
          setActiveIndex(activeIndex);
        }}
      />
    </div>
    // </BannerSlider>
  );
};
