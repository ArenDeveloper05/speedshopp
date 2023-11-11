import './ProductArea.scss'

export default function ProductArea({title}){
    return(
        <div className={'product_area_cont'}>
            <div className={'product_area_title'}>
                <p>
                    {title}
                </p>
                    <div className={'see_all_btn'}>
                        <a href={'/'}>
                            <p>
                                Տեսնել բոլորը
                            </p>
                        </a>
                    </div>
            </div>
            <div className={'product_area'}></div>
        </div>
    )
}