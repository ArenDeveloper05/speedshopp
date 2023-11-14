import './ProductCard.scss'
import React from "react";

export default function ProductCard(){
    return(
        <div className={'product_card'}>
            <div className={'product_card_img_box'}>
                <img src="/images/macbook.jpg" />
                <div className={'product_like'}>
                    <img src={'/images/favorite.png'}/>
                </div>
            </div>
            <div className={'product_price_box'}>
                <p>
                    355.000
                </p>
                <span>
                    ֏
                </span>
            </div>
            <div className={'product_name_box'}>
                <p>
                    Գերհզոր M1 Pro չիպով Macbook Pro 16 2021 MK183 -M1 Pro Chip /512Gb SSD/16Gb RAM * 1 տարի երաշխիք
                </p>
            </div>
            <div className={'see_more_btn_box'}>
                <div className={'see_more_btn'}>
                    <a href={'/'}>
                        ավելին
                    </a>
                </div>
            </div>
        </div>
    )
}