import { Swiper, SwiperSlide } from "swiper/react";
import style from "./style.module.css";
import "swiper/css";
import "swiper/css/effect-fade";
import Button from "../Button";

// https://swiperjs.com/react
const SlideShow = () => {
  return (
    <Swiper
      className={`h-full `}
      style={style}
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
    >
      <SwiperSlide>
        <div className={`h-full w-full ${style.slide1} `}>
          <div className="absolutetext-white flex justify-center items-center h-full w-full ">
            <div className="text-white text-left container mx-auto p-5 flex flex-col space-y-10 ">
              <p className="text-3xl font-semibold">
                ENTERPRISE SOFTWARE <br />
                DEVELOPMENT
              </p>
              <p style={{ fontSize: 18 }}>
                Let our team of Certified Engineers and Designers be on your
                team.
              </p>
              <Button className="w-3/4 md:w-1/4">Read our case studies</Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`h-full w-full ${style.slide2} `}>
          <div className="absolutetext-white flex justify-center items-center h-full w-full ">
            <div className="text-white text-left container mx-auto p-5 flex flex-col space-y-10 ">
              <p className="text-3xl font-semibold">
                MOBILE APPLICATION
                <br />
                DEVELOPMENT
              </p>
              <p style={{ fontSize: 18 }}>
                One Codebase for IOS, Android & Windows
              </p>
              <Button className="w-3/4 md:w-1/4">See our App Portfolio</Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`h-full w-full ${style.slide3} `}>
          <div className="absolutetext-white flex justify-center items-center h-full w-full ">
            <div className="text-white text-left container mx-auto p-5 flex flex-col space-y-10 ">
              <p className="text-3xl font-semibold">
                APPLICATION PROGRAMMING INTERFACE
                <br />
                DEVELOPMENT
              </p>
              <p style={{ fontSize: 18 }}>
                REST & GraphQL API , With Auth, docs and more!
              </p>
              <Button className="w-3/4 md:w-1/4">
                Take a look at our docs
              </Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SlideShow;
