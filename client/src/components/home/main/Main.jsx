import FilterCustom from '../filter_custom/FilterCustom';
import style from './Main.scss'
import Slider from "./slider/Slider";

export default function Main(){
    return(
        <div className={'main'}>
            <Slider/>
            <FilterCustom/>
        </div>
    )
}