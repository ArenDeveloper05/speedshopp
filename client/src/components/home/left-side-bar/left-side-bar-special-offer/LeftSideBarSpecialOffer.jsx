import './LeftSideBarSpecialOffer.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import {Autoplay, EffectCoverflow, Navigation, Pagination} from 'swiper/modules';

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
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        coverflowEffect={{
                            rotate: 100,
                            stretch: 0,
                            depth: 50,
                            modifier: 2,
                            slideShadows: true,
                        }}
                        navigation={true}
                        modules={[EffectCoverflow, Pagination, Autoplay,Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <a href={'/'}>
                                <img src="/images/imac.jpg" alt={'specialOffer'}/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href={'/'}>
                                <img src="/images/iphone15(1).webp" alt={'specialOffer'}/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href={'/'}>
                                <img src="/images/iphone15.jpg" alt={'specialOffer'}/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href={'/'}>
                                <img src="/images/macbook.jpg" alt={'specialOffer'}/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href={'/'}>
                                <img src="/images/macbook(1).webp" alt={'specialOffer'}/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href={'/'}>
                                <img src="/images/applewatch.jpg" alt={'specialOffer'}/>

                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href={'/'}>
                                <img src="/images/applewatch(1).jpg" alt={'specialOffer'}/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href={'/'}>
                                <img src="/images/airpods.webp" alt={'specialOffer'}/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href={'/'}>
                                <img src="/images/iphone15.jpg" alt={'specialOffer'}/>
                            </a>
                        </SwiperSlide>
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