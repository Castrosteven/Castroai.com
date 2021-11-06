import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const images = [
  "/assets/brand_image.jpg",
  "/assets/brand_image.jpg",
  "/assets/brand_image.jpg",
];

const SlideShow = () => {
  return (
    <AwesomeSlider fillParent={true}>
      {images.map((img, key) => {
        return <div key={key} data-src="/assets/brand_image.jpg" />;
      })}
    </AwesomeSlider>
  );
};

export default SlideShow;
