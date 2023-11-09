import style from './LeftSideBar.scss'
import LeftSideBarCategories from "./left-side-bar-categories/LeftSideBarCategories";
export default function LeftSideBar(){
    return(
        <div className={'left_side_bar'}>
            <LeftSideBarCategories/>
        </div>
    )
}