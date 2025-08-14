"use client"
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BannerItem from "./BannerItem";
export default function Banner() {
	return (
    <div className="w-full h-64 md:h-80 lg:h-96">
        <Swiper
          slidesPerView={6.5}
          spaceBetween={30}
          modules={[Pagination]}
           className="mySwiper w-full h-full"
        >
          <SwiperSlide>
            <BannerItem/>
          </SwiperSlide>
          <SwiperSlide>
          <BannerItem/>
          </SwiperSlide>
          <SwiperSlide>
          <BannerItem/>
          </SwiperSlide>
          <SwiperSlide>
          <BannerItem/>
          </SwiperSlide>
          <SwiperSlide>
          <BannerItem/>
          </SwiperSlide>
          <SwiperSlide>
          <BannerItem/>
          </SwiperSlide>
          <SwiperSlide>
          <BannerItem/>
          </SwiperSlide>
          <SwiperSlide>
          <BannerItem/>
          </SwiperSlide>
          
        </Swiper>
    </div>
	);
}


