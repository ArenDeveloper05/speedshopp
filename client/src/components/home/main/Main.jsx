<<<<<<< HEAD
import FilterCustom from '../filter_custom/FilterCustom';
import style from './Main.scss'
=======
>>>>>>> 767652e585757166b6be1c4343e6e88ce2114714
import Slider from "./slider/Slider";
import './Main.scss'

export default function Main(){
    return(
        <div className={'main'}>
            <Slider/>
            <FilterCustom/>
        </div>
    )
}