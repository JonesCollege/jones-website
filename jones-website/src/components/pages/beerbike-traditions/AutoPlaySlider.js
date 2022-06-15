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
              <img style={{ width: "50vw" }} src={image} alt="image" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
