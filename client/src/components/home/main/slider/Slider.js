
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.scss'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className={'slider_content'}>
                        <div className={'slider_content_text_area'}>
                            <p>
                                Ստեղծեք ձեր ինտերնետ խանութը
                                մեր կայքում եվ սկսեք
                                վաճառել մեզ հետ
                            </p>
                        </div>
                        <a href={'/'}>
                            <button className={'slider_content_btn'}>
                                Իմանալ ավելին
                                <div className={'slider_btn_icon'}></div>
                            </button>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img src={'/images/phenixImg.jpg'} alt={'phenix'}/></SwiperSlide>
            </Swiper>
        </>
    );
}
