import React, { useEffect, useState } from 'react'
import LogoSvg from '../assets/svg/LogoSvg'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const location = document.location.href
    const locArray = location ? location.split('/') : []
    const locArrayRev = locArray?.length ? locArray.reverse() : []
    const current = locArrayRev?.length ? locArrayRev[0] : null


    // const [state, setState] = useState('/')
    // useEffect(() => {
    //     setState(current)
    // }, [location])

    return (
        <div className='navpanel'>
            <div className="navcontainer container">
                <a href="/">
                    <LogoSvg />
                </a>
                {
                    current && current === 'products' ?
                        <div className='menu'>
                            <a className='menu-link' href="/">На главную</a>
                        </div>
                        :
                        <div className="menu">
                            <a className='menu-link' href="#service">Услуги</a>
                            <a className='menu-link' href="#industries">Направления</a>
                            <a className='menu-link' href="#products">Решения</a>
                            {/* <a className='menu-link' href="#blog">Блог</a> */}
                            <a className='menu-link' href="#about">О&nbsp;нас</a>
                            <a href='#contact' className='prime-link'>Обсудить проект</a>
                        </div>
                }
            </div>
        </div>
    )
}

export default Navbar