/* eslint-disable jsx-a11y/anchor-is-valid */
import './FilteredItems.scss'

export default function FilteredItems({context,bgcolor,textColor}){

    return(
        <div className='filtered_item_type_box' style={{backgroundColor:bgcolor}}>
            <a href="#" style={{color:textColor}}>{context}</a>
        </div>
    );

};
