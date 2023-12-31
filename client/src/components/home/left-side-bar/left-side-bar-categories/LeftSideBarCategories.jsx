import './LeftSideBarCategories.scss'

export default function LeftSideBarCategories(){
    return(
        <div className={'Left_side_bar_categories'}>
            <h4 className={'categories_all'}>
                <a href={'/'}>Բոլոր բաժինները</a>
            </h4>
            <div className={'Left_side_bar_categories_border_style'}></div>
            <ul>
                <li>
                    <a href={'/'}>
                        <div className={'categories_icon_cont'}>
                        <div className={'category1_icon category_icon'}>
                            <img src={'/images/home.png'} alt={'category'}/>
                        </div>
                    </div>
                        Անշարժ գույք
                    </a>
                </li>
                <li>
                    <a href={'/'}>
                        <div className={'categories_icon_cont'}>
                            <div className={'category2_icon category_icon'}>
                                <img src={'/images/cars.png'} alt={'category'}/>
                            </div>
                        </div>
                        Տրանսպորտ
                    </a>
                </li>
                <li>
                    <a href={'/'}>
                        <div className={'categories_icon_cont'}>
                            <div className={'category3_icon category_icon'}>
                                <img src={'/images/electronic.png'} alt={'category'}/>

                            </div>
                        </div>
                        Էլեկտրոնիկա
                    </a>
                </li>
                <li>
                    <a href={'/'}>
                        <div className={'categories_icon_cont'}>
                            <div className={'category4_icon category_icon'}>
                                <img src={'/images/garden.png'} alt={'category'}/>
                            </div>
                        </div>
                        Տուն և Այգի
                    </a>
                </li>
                <li>
                    <a href={'/'}>
                        <div className={'categories_icon_cont'}>
                            <div className={'category4_icon category_icon'}>
                                <img src={'/images/restaurant.png'} alt={'category'}/>
                            </div>
                        </div>
                        Ռեստորանները
                    </a>
                </li>
                <li>
                    <a href={'/'}>
                        <div className={'categories_icon_cont'}>
                            <div className={'category4_icon category_icon'}>
                                <img src={'/images/services.png'} alt={'category'}/>
                            </div>
                        </div>
                        Ծառայություններ
                    </a>
                </li>
            </ul>
        </div>
    )
}