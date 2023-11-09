import './LeftSideBarSpecialOffer.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

export default function LeftSideBarSpecialOffer(){
    return(
        <div className={'left-side-bar-special-offer'}>
            <div className={'special_offer_box'}>
                <div className={'special_offer special_offer_text'}>
                    <p>
                        ՀԱՏՈՒԿ
                        <br></br>
                        ԱՌԱՋԱՐԿՆԵՐ
                    </p>
                    <div className={'special_offer_icon'}></div>
                </div>
                <div className={'special_offer count_down'}>
                    <div className={'count_down_box'}>
                        <p>0</p>
                        <span>day</span>
                    </div>
                    <div className={'count_down_box'}>
                        <p>00</p>
                        <span>hour</span>
                    </div>
                    <div className={'count_down_box'}>
                        <p>00</p>
                        <span>min</span>
                    </div>
                    <div className={'count_down_box'}>
                        <p>00</p>
                        <span>sec</span>
                    </div>
                </div>
            </div>
            <div className={'special_offer_slider_cont'}>
                <div className={'special_offer_slider'}>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={'/images/default.jpg'} alt={'phenix'}/></SwiperSlide>
                        <SwiperSlide><img src={'/images/default.jpg'} alt={'phenix'}/></SwiperSlide>
                        <SwiperSlide><img src={'/images/default.jpg'} alt={'phenix'}/></SwiperSlide>
                        <SwiperSlide><img src={'/images/default.jpg'} alt={'phenix'}/></SwiperSlide>
                    </Swiper>
                </div>
                <div className={'special_offer_all_btn'}>
                    <a href={'/'}>
                        <button>Տեսնել բոլորը</button>
                    </a>
                </div>
            </div>
        </div>
    )
}