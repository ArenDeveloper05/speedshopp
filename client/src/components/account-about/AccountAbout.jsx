/* eslint-disable jsx-a11y/alt-text */
import './AccountAbout.scss'

function AccountAbout(){
    return(
        <section className='main-body'>
            <div className='navigation-row'>
                <div className='account-navigation'>
                    <div className='myAccount-navigation-link--dashboard'>
                        <div className='dasboard-elements'>
                            <div className='arrow_icon'>
                                <img src={'/images/leftArrow.png'}/>
                            </div>
                            <div className='dashboard_title'>
                                <a href="#">Պատվերներ</a>
                            </div>
                        </div>
                    </div>
                    <div className='myAccount-navigation-link--dashboard'>
                        <div className='dasboard-elements'>
                            <div className='arrow_icon'>
                                <img src={'/images/leftArrow.png'}/>
                            </div>
                        <div className='dashboard_title'>
                            <a href="#">Անձնական Տվյալներ</a>
                        </div>
                    </div>
                    </div>
                    <div className='myAccount-navigation-link--dashboard'>
                        <div className='dasboard-elements'>
                            <div className='arrow_icon'>
                              <img src={'/images/leftArrow.png'}/>
                            </div>
                            <div className='dashboard_title'>
                                <a href="#">Կառավարման Վահանակ</a>
                            </div>
                        </div>
                    </div>
                    <div className='myAccount-navigation-link--dashboard'>
                        <div className='dasboard-elements'>
                                <div className='arrow_icon'>
                                    <img src={'/images/leftArrow.png'}/>
                                </div>
                                <div className='dashboard_title'>
                                    <a href="#">Դուրս գալ</a>
                                </div>
                        </div>
                    </div>
                </div>
                <div className='woocommerce-message-box'>
                    <div className='woocommerce-elements-container'>
                            <div className='woocommerce-message-icon'>
                                <img src={'/images/galochka.png'} />
                            </div>
                            <div className='woocommerce-message-title'>
                                <p>Առայժմ ոչ մի պատվեր չի կատարվել</p>
                            </div>
                            <button className='woocommerce-messate-goToStore-button'>Գնալ Խանութ</button>
                    </div>      
                </div>
            </div>
        </section>  
    )
}

export default AccountAbout