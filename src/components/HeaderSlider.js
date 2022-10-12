import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import sliderimg from '../assets/video.png'
import sliderimg2 from '../assets/slider1.jpg'
import sliderimg3 from '../assets/slider2.jpg'

export default function App() {
  return (
    <>
      <Swiper 
        navigation={true} 
        modules={[Navigation]} 
        className="mySwiper h-fit z-[-10] top-0 relative text-center items-center">
        <SwiperSlide> <img src={sliderimg} className='w-full' /> </SwiperSlide>
        <SwiperSlide> <img src={sliderimg2} className='w-full' /></SwiperSlide>
        <SwiperSlide> <img src={sliderimg3} className='w-full' /></SwiperSlide>
      </Swiper>
    </>
  );
}
