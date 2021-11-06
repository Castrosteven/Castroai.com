import AwesomeSlider from "react-awesome-slider";
import styles from "./slideshow.module.css";
import {
  withNavigationHandlers,
  withNavigationContext,
} from "react-awesome-slider/dist/navigation";
import Button from "../Button";
const Slider = withNavigationHandlers(AwesomeSlider);

const Slide1 = () => {
  return (
    <div className="text-white text-left container mx-auto p-5 flex flex-col space-y-10 ">
      <p className="text-3xl font-semibold">
        ENTERPRISE SOFTWARE <br />
        DEVELOPMENT
      </p>
      <p>Let our team of Certified Engineers and Designers be on your team.</p>
      <Button className="w-3/4 md:w-1/4">Read our case studies</Button>
    </div>
  );
};

const Slide2 = () => {
  return (
    <div className="text-white text-left container mx-auto p-5 flex flex-col space-y-10 ">
      <p className="text-3xl font-semibold">
        THE REMOTE TEAM <br />
        FOR YOU
      </p>
      <p>Let our team of Certified Engineers and Designers be on your team.</p>
      <Button className="w-3/4 md:w-1/4">Meet the team</Button>
    </div>
  );
};

const slides = [
  {
    slug: "",
    className: "w-full",
    children: <Slide1 />,
  },
  {
    slug: "",
    className: "w-full",
    children: <Slide2 />,
  },
];

const SlideShow = () => {
  return <Slider cssModule={styles} fillParent={true} media={slides}></Slider>;
};

export default SlideShow;
