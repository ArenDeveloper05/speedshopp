import style from './LeftSideBarCategories.scss'

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
                            <img src={'/images/home.png'}/>
                        </div>
                    </div>
                        Անշարժ գույք
                    </a>
                </li>
                <li>
                    <a href={'/'}>
                        <div className={'categories_icon_cont'}>
                            <div className={'category2_icon category_icon'}>
                                <img src={'/images/cars.png'}/>
                            </div>
                        </div>
                        Տրանսպորտ
                    </a>
                </li>
                <li>
                    <a href={'/'}>
                        <div className={'categories_icon_cont'}>
                            <div className={'category3_icon category_icon'}>
                                <img src={'/images/electronic.png'}/>

                            </div>
                        </div>
                        Էլեկտրոնիկա
                    </a>
                </li>
                <li>
                    <a href={'/'}>
                        <div className={'categories_icon_cont'}>
                            <div className={'category4_icon category_icon'}>
                                <img src={'/images/garden.png'}/>
                            </div>
                        </div>
                        Տուն և Այգի
                    </a>
                </li>
            </ul>
        </div>
    )
}