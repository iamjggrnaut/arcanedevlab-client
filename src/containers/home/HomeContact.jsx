import React from 'react'

import { SiTelegram, SiInstagram, SiYoutube } from "react-icons/si";


const HomeContact = () => {

    return (
        <div className='contact-block' id='contact'>
            <div className="container">
                <div className="d-flex flex-column align-items-center gap-2">
                    <p className="title">Свяжитесь с нами</p>
                    <a className='cont-link' href='mailto:arcanedevlab@gmail.com' target='_blank'>Email: arcanedevlab@gmail.com</a>
                    <a className='cont-link' href='https://t.me/hardnuttocrack' target='_blank'>Telegram: @hardnuttocrack</a>
                    <br />
                    <p className="title">Мы в соцсетях</p>
                    <div className="d-flex justify-content-center gap-3">
                        <a className='con-link-icon' style={{ marginRight: '16px' }} href="https://t.me/arcanedevlab"><SiTelegram /></a>
                        <a className='con-link-icon' href="https://instagram.com/arcanedevlab"><SiInstagram /></a>
                        {/* <a className='con-link-icon' href="#"><SiYoutube /></a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContact