export const SliderContent = ({ activeIndex, imageSlider }: any) => {
  return (
    <section>
      {imageSlider.map((slide: any, index: any) => (
        <div
          key={index}
          className={`slides 
            ${index === activeIndex ? "active" : "inactive"}
          `}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <h2 className="slide-title">{slide.title}</h2>
          <h3 className="slide-text">{slide.description}</h3>
        </div>
      ))}
    </section>
  );
};
