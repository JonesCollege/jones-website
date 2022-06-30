import Slider from "react-slick";

export default function AutoPlaySlider({ images }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {images.map((image) => {
          return (
            <div>
              <img
                className="autoplay-slider-image"
                style={{ width: "49.8vw", margin: "10px" }}
                src={image}
                alt="image"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
