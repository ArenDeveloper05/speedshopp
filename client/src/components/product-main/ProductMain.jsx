import './ProductMain.scss'
import PageBanner from "../common/page-banner/PageBanner";
export default function ProductMain(){
    return(
        <div className={'product_page_cont'}>
            <PageBanner/>
            <div className={'product_page'}>
                <div className={'product_images_cont'}>
                    <div className={'product_small_images_cont'}>
                        <div className={'product_small_image product_small_image1'}>
                            <img src={'/images/macbook(1).webp'}/>
                        </div>
                        <div className={'product_small_image product_small_image2'}>
                            <img src={'/images/macbook(2).jpg'}/>
                        </div>
                        <div className={'product_small_image product_small_image3'}>
                            <img src={'/images/macbook(3).webp'}/>
                        </div>
                        <div className={'product_small_image product_small_image4'}>
                            <img src={'/images/macbook(4).webp'}/>
                        </div>
                        <div className={'product_small_image product_small_image5'}>
                            <img src={'/images/macbook(5).jpg'}/>
                        </div>
                        <div className={'product_small_image product_small_image6'}>
                            <img src={'/images/macbook(6).jpg'}/>
                        </div>
                    </div>
                    <div className={'product_big_image_cont'}>
                        <img src={'/images/macbook(8).jpg'}/>
                    </div>
                </div>
                <div className={'product_info_cont'}>
                    <div className={'product_snippet_cont'}>
                        <div className={'product_snippet_tag'}>
                            <p>
                                new
                            </p>
                        </div>
                    </div>
                    <div className={'product_page_product_name_cont'}>
                        <p>
                            Գերհզոր M1 Pro չիպով Macbook Pro 16 2021 MK183 -M1 Pro Chip
                        </p>
                    </div>
                    <div className={'product_page_product_price_cont'}>
                        <p>
                            355.000
                            ֏
                        </p>
                    </div>
                    <div className={'product_page_user_info_cont'}>
                        <div className={'product_page_product_user_title'}>
                            <div className={'product_page_product_user_logo'}>
                                <img src={'/images/proflieLogo.jpg'}/>
                            </div>
                            <div className={'product_page_product_user_name'}>
                                <p>
                                    Անուն ազգանուն
                                </p>
                            </div>
                        </div>
                        <div className={'product_page_user_reviews_cont'}>
                            <img src={'/images/star.png'}/>
                            <img src={'/images/star.png'}/>
                            <img src={'/images/star.png'}/>
                            <img src={'/images/star.png'}/>
                            <img src={'/images/star.png'}/>
                        </div>
                    </div>
                    <div className={'product_page_product_vendor_code_cont'}>
                        <p>
                            346244
                        </p>
                    </div>
                    <div className={'product_page_product_description'}>
                        <p>
                            Էկրան 13.3 դյույմ, 2560x1600 QHD
                            Պրոցեսոր Apple M1 Chip (8 միջուկ)
                            SSD 256 ԳԲ
                            RAM 8 ԳԲ

                            Buy Laptop խանութ սրահից կարող եք ձեռք բերել նոթբուքերի, համակարգիչների, պլանշետների և սմարթֆոնների լայն տեսականի անհամեմատ մատչելի գներով։

                            Գործում է նաև վաճառք ապառիկ եղանակով:
                            Պայմաններ՝

                            Կանխավճար 0%
                            Մարման Ժամկետ 3-36 ամիս
                            Պահանջվում է ներկայացնել անձնագիր և սոցքարտ:
                        </p>
                    </div>
                    <div className={'product_page_product_buy_btn_cont'}>
                        <button className={'product_page_product_buy_btn'}>
                            գնել
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}