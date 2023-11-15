import './AboutUs.scss';

 function AboutUs() {
    return(
        <section className='mainContainer'>
            <div className='info-Child-Container'>
                    <div className='infoContainer--ImageContainer' style={{backgroundImage:"url(/about-us.jpg)"}}></div>
                    <div className='infoContainer--TextContainer'>
                       <h2>Մեր մասին</h2>
                        <p>SpeedShop.am -ը առցանց խանութ է, որը հնարավորություն է տալիս կատարել գնումներ մեզ մոտ գրանցված խանութներից և իրականացնել վաճառք մեր հարդակի միջոցով ( մենք տրամադրում ենք վաճառքի բոլոր հնարավորությունները, որոնք առկա են ցանկացած օնլայն խանութում։Վաճառողին հնարավորություն է տրվում ղեկավարման վահանակի միջոցով ավելացնել ( ջնջել, փոփոխել ) ապրանքատեսականին ըստ դասակարգման և վաճառել) Վաճառողը ունենում է իր խանութի անձնական էջը (մուտքային տվյալներով և խանութի լոգոտիպով), որտեղ երևալու է միայն տվյալ խանութի ապրանքները ըստ դասակարգման․</p>
                    </div>
            </div>
        </section>
    );
};

export default AboutUs