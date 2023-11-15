import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Slider.scss'
import 'swiper/css/navigation';


// import required modules
import {Autoplay, EffectCoverflow, Navigation, Pagination} from 'swiper/modules';

export default function Slider() {
    return (
        <div className={'slider'}>
            <div className={'slider_blure'}></div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    spaceBetween={0}
                    slidesPerView={1.2}
                    navigation={true}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 50,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[Navigation, EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="/images/phenixImg.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/phenixImg.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/fastex.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/idram.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/idram.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/parma.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/phenixImg.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/phenixImg.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/phenixImg.jpg" />
                    </SwiperSlide>
                </Swiper>
        </div>
    );
}

