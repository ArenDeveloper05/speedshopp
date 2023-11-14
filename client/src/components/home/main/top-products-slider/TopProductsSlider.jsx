import './TopProductsSlider.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { Autoplay, EffectCards} from 'swiper/modules'

export default function TopProductsSlider(){
    return(
        <div className={'top_products_slider'}>
            <Swiper
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <a href={'/'}>
                        <img src={'/images/iphone15.jpg'} alt={'topProduct'}></img>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={'/'}>
                        <img src={'/images/iphone15(1).webp'} alt={'topProduct'}></img>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={'/'}>
                        <img src={'/images/macbook.jpg'} alt={'topProduct'}></img>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={'/'}>
                        <img src={'/images/macbook(1).webp'} alt={'topProduct'}></img>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={'/'}>
                        <img src={'/images/imac.jpg'} alt={'topProduct'}></img>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={'/'}>
                        <img src={'/images/airpods.webp'} alt={'topProduct'}></img>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={'/'}>
                        <img src={'/images/applewatch.jpg'} alt={'topProduct'}></img>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={'/'}>
                        <img src={'/images/applewatch(1).jpg'} alt={'topProduct'}></img>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={'/'}>
                        <img src={'/images/applewatch(2).jfif'} alt={'topProduct'}></img>
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}