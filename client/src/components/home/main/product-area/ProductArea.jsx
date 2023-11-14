import './ProductArea.scss'
import ProductCard from "../../product-card/ProductCard";

export default function ProductArea({title}){
    const productCards = []
    for(let i = 0; i < 4; i++){
        productCards.push(<ProductCard/>)
    }
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
            <div className={'product_area'}>
                {productCards}
            </div>
        </div>
    )
}