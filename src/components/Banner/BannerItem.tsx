"use client"
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function BannerItem() {
	return (
       <SwiperSlide>


       <div className="">
              <Image className="object-cover" height={250} width={200} src="https://xtruyen.vn/wp-content/uploads/2024/10/de-ba.jpg" alt="" />
              <div className="absolute top-2 left-5 text-[12px] bg-red-500 text-white px-1 rounded-md">Hot</div>
       </div>        
              <div className="w-full rounded-lg text-center py-2">
                  <p className="text-[16px] font-bold">Title</p>
                  <span className="text-[14px]">100 Chương</span>
              </div>
       </SwiperSlide>
	);
}


