import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";
import styles from "./slideshow.module.css";

const images = [
  "/assets/brand_image.jpg",
  "/assets/brand_image.jpg",
  "/assets/brand_image.jpg",
];

const SlideShow = () => {
  return (
    <AwesomeSlider cssModule={styles} fillParent={true}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </AwesomeSlider>
  );
};

export default SlideShow;
