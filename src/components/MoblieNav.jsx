import React, { useState } from 'react'
import LogoSvg from '../assets/svg/LogoSvg'
import { GiHamburgerMenu } from "react-icons/gi";


const MoblieNav = () => {

    const [show, setShow] = useState(false)

    const location = document.location.href
    const locArray = location ? location.split('/') : []
    const locArrayRev = locArray?.length ? locArray.reverse() : []
    const current = locArrayRev?.length ? locArrayRev[0] : null

    return (
        <div className='mobipanel container'>
            <LogoSvg />

            <div>
                <GiHamburgerMenu className='mobicon' onClick={() => setShow(!show)} />
            </div>
            {
                current && current === 'products' ?
                    <div className='menu'>
                        <a className='menu-link' href="/">На главную</a>
                    </div>
                    :
                    <div className={show ? "mobile-menu" : 'mobile-menu-hidden'}>
                        <a className='menu-link' href="#service" onClick={() => setShow(false)}>Услуги</a>
                        <a className='menu-link' href="#industries" onClick={() => setShow(false)}>Направления</a>
                        <a className='menu-link' href="#products" onClick={() => setShow(false)}>Решения</a>
                        {/* <a className='menu-link' href="#blog" onClick={() => setShow(false)}>Блог</a> */}
                        <a className='menu-link' href="#about" onClick={() => setShow(false)}>О&nbsp;нас</a>
                        <a href='#contact' className='prime-link' onClick={() => setShow(false)}>Обсудить проект</a>
                    </div>
            }
        </div>
    )
}

export default MoblieNav