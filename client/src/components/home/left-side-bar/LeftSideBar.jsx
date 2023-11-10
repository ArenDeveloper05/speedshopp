import style from './LeftSideBar.scss'
import LeftSideBarCategories from "./left-side-bar-categories/LeftSideBarCategories";
import LeftSideBarSpecialOffer from "./left-side-bar-special-offer/LeftSideBarSpecialOffer";
import Ads from "./ads/Ads";
export default function LeftSideBar(){
    return(
        <div className={'left_side_bar'}>
            <LeftSideBarCategories/>
            <LeftSideBarSpecialOffer/>
            <Ads/>
        </div>
    )
}