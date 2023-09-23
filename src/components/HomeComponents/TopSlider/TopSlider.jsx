import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function TopSlider() {
  return (
    <section className="pb-20 -mt-40">
      <div className="w-[90%] md:w-[700px] mx-auto">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 10,
            stretch: 100,
            depth: 100,
            modifier: 3,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="HomeTopSlider"
        >
          <SwiperSlide>
            <img src="/images/HomeTopSlider/slider1.png" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/HomeTopSlider/slider2.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/HomeTopSlider/slider3.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/HomeTopSlider/slider4.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/HomeTopSlider/slider5.jpg" alt="slide_image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
