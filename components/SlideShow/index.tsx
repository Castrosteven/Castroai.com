import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const SlideShow = () => {
  return (
    <Swiper
      className="h-full"
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        {/* Layer 1 - Black WH-full */}
        <div className="bg-black h-full w-full ">
          {/* Layer 2 Img & opacity */}
          <div
            className="
            h-full w-full 
            bg-slide1 bg-center bg-cover   
            bg-no-repeat opacity-40
            relative z-20
            "
          >
            {/* TEXT WHITE */}
            <div
              className="
              text-white flex justify-center 
              items-center h-full w-full
                "
            >
              <span className="font-extrabold text-2xl">FUCK</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default SlideShow;
