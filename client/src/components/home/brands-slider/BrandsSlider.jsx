import './BrandsSlider.scss'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

export default function BrandsSlider(){
    return(
        <div className={'brand_slider_cont'}>
            <Swiper watchSlidesProgress={true} slidesPerView={3.850} className="mySwiper">
                <SwiperSlide>Brand 1</SwiperSlide>
                <SwiperSlide>Brand 2</SwiperSlide>
                <SwiperSlide>Brand 3</SwiperSlide>
                <SwiperSlide>Brand 4</SwiperSlide>
                <SwiperSlide>Brand 5</SwiperSlide>
                <SwiperSlide>Brand 6</SwiperSlide>
                <SwiperSlide>Brand 7</SwiperSlide>
                <SwiperSlide>Brand 8</SwiperSlide>
                <SwiperSlide>Brand 9</SwiperSlide>
            </Swiper>
        </div>
    )
}