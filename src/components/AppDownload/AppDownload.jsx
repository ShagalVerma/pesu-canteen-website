import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience Download <br />PESU App</p>
            <div className="app-download-platforms">
                <a href="https://play.google.com/store/apps/details?id=pes.pesu&hl=en_IN" target="_blank">
                <img src={assets.play_store} alt="" />
                </a>
                <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://apps.apple.com/ae/app/pesu/id1103630030&ved=2ahUKEwiDn8aws-iJAxV9UGcHHZ91AGQQFnoECBsQAQ&usg=AOvVaw3U3KoUbEeouPuIwdtA7mxz" target="_blank">
                <img src={assets.app_store} alt="" />
                </a>
            </div>
        </div>
    )
}

export default AppDownload
