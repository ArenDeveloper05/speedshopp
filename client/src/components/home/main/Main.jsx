import './Main.scss'

import Slider from "./slider/Slider";
import './Main.scss'
import TopProductsSlider from "./top-products-slider/TopProductsSlider";
import ProductArea from "./product-area/ProductArea";

export default function Main(){
    return(
        <div className={'main'}>
            <Slider/>
            <div className={'main_top_content'}>
                <TopProductsSlider/>
            </div>
            <ProductArea title={'Նոր Տեսականի'}/>
            <ProductArea title={'Զեղչված Ապրանքներ'}/>
            <ProductArea title={'Լավագույն Ապրանքներ'}/>
        </div>
    )
}