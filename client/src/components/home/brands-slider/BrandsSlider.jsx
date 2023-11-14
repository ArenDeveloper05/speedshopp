import './BrandsSlider.scss'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide} from "swiper/react";

export default function BrandsSlider(){
    return(
        <div className={'brand_slider_cont'}>
            <Swiper watchSlidesProgress={true} spaceBetween={10} slidesPerView={4} className="mySwiper">
                <SwiperSlide>
                    <a href={'/'}>
                        <img src="/images/fastex.png" />

                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={'/'}>
                        <img src="/images/idram.jpg" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={'/'}>
                        <img src="/images/phenixlogo.jpg" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={'/'}>
                        <img src="/images/brand1.jpg" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={'/'}>
                        <img src="/images/brand2.jpg" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={'/'}>
                        <img src="/images/brand3.jpg" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={'/'}>
                        <img src="/images/brand4.jpg" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={'/'}>
                        <img src="/images/phenixlogo.jpg" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={'/'}>
                        <img src="/images/phenixlogo.jpg"/>
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}