import React from 'react'
import Top from '../containers/home/Top'
import HomeAbout from '../containers/home/HomeAbout'
import HomeService from '../containers/home/HomeService'
import HomeProspects from '../containers/home/HomeProspects'
import HomeSolutions from '../containers/home/HomeSolutions'
import HomeNews from '../containers/home/HomeNews'
import HomeContact from '../containers/home/HomeContact'

const HomePage = () => {

    return (
        <div className='homepage'>
            <Top />
            <HomeAbout />
            <HomeService />
            <HomeProspects />
            <HomeSolutions />
            <HomeContact />
            <HomeNews />
        </div>
    )
}

export default HomePage