import './Main.scss'

import Slider from "./slider/Slider";
import './Main.scss'
import TopProductsSlider from "./top-products-slider/TopProductsSlider";

export default function Main(){
    return(
        <div className={'main'}>
            <Slider/>
            <div className={'main_top_content'}>
                <TopProductsSlider/>
            </div>
        </div>
    )
}