import './Media.scss'
export default function Media(){
    return(
        <div className={'media_cont'}>
            <div className={'media_row media_row1'}>
                <div className={'media_row_img'}></div>
                <div className={'media_row_title'}>
                    <p>
                        Առաքում
                    </p>
                </div>
            </div>
            <div className={'media_row media_row2'}>
                <div className={'media_row_img'}></div>
                <div className={'media_row_title'}>
                    <p>
                        24/7 Սպասարկում
                    </p>
                </div>
            </div>
            <div className={'media_row media_row3'}>
                <div className={'media_row_img'}></div>
                <div className={'media_row_title'}>
                    <p>
                        100% Գումարի Վերադարց
                    </p>
                </div>
            </div>
        </div>
    )
}