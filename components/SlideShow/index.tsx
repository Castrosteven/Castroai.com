import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const images = [
  "/assets/brand_image.jpg",
  "/assets/brand_image.jpg",
  "/assets/brand_image.jpg",
];

const SlideShow = () => {
  return (
    <AwesomeSlider>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </AwesomeSlider>
  );
};

export default SlideShow;
