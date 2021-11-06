import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withCaption from "react-awesome-slider/dist/captioned";

const CaptionedSlider = withCaption(AwesomeSlider);

const images = [
  "/assets/brand_image.jpg",
  "/assets/brand_image.jpg",
  "/assets/brand_image.jpg",
];

const SlideShow = () => {
  return (
    <CaptionedSlider
      // startupScreen={StartupScreen}
      // cssModule={CaptionedStyles}
      screens={[
        {
          backgroundColor: "#4a9c8c",
          media: "/images/series/ricknmorty-3.png",
          caption: "I want to see what you got.",
        },
        {
          backgroundColor: "#4a9c8c",
          media: "/images/series/ricknmorty-3.png",
          caption: "The answer is -- Don't think about it.",
        },
      ]}
    />
  );
};

export default SlideShow;
