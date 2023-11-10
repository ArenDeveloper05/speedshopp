import './FilterCustom.scss'
import FilteredItems from './filtered_items/FilteredItems'

export default function FilterCustom(){

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
                <FilteredItems context="Բոլորը" bgcolor="#9457EB" textColor="white"/>
                <FilteredItems context="Նոր" />
                <FilteredItems context="Լավագույն" />
                <FilteredItems context="Զեղչ" />
            </div>  
            <section className='filtered_Section'>

            </section>
        </div>
    )
}
