import './FilterCustom.scss'
import FilteredItems from './filtered_items/FilteredItems'
import ProductCard from "../product-card/ProductCard";

export default function FilterCustom(){

    const productCards = []
    for(let i = 0; i < 10; i++){
        productCards.push(<ProductCard/>)
    }

    return(
        <div className="filter_section">
            <div className='section_title'>
                <div className='title-left-path'></div>
                <div>
                    <p>ՖԻԼՏՐԵԼ</p>
                </div>
                <div className='title-right-path'></div>
            </div>
            <div className='filtered_Items'>
                <FilteredItems context="Բոլորը" bgcolor="#8A22C4" textColor="white"/>
                <FilteredItems context="Նոր" />
                <FilteredItems context="Լավագույն" />
                <FilteredItems context="Զեղչ" />
            </div>  
            <section className='filtered_Section'>
                {productCards}
            </section>
        </div>
    )
}
