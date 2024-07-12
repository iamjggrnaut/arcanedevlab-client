import React from 'react'
import LogoSvg from '../assets/svg/LogoSvg'

const Footer = () => {

    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-container">
                    <div className="footer-logo col">
                        <LogoSvg />
                        <p className='mt-4' style={{ fontSize: '12px' }}>Все права защищены © 2024</p>
                    </div>
                    <div className="footer-links col">
                        <div className="row">
                            <div className="col">
                                <p className="subtitle">Продукты</p>
                                <a href='/products' className="fo-link">ADL Hyperion</a>
                                <br />
                                <a href='/products' className="fo-link">Markan</a>
                                <br />
                                <a href='/products' className="fo-link">ADL Assistant</a>
                            </div>
                            {/* <div className="col">
                                <p className="subtitle">Сотрудничество</p>
                                <a href='#' className="fo-link">Инвесторам</a>
                                <br />
                                <a href='#' className="fo-link">Реклама</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer