import React, { useState } from 'react'
import FoodSvg from '../../assets/svg/FoodSvg'
import EdtechSvg from '../../assets/svg/EdtechSvg'
import HealthSvg from '../../assets/svg/HealthSvg'
import MediaSvg from '../../assets/svg/MediaSvg'
import PlaneSvg from '../../assets/svg/PlaneSvg'
import MoneySvg from '../../assets/svg/MoneySvg'

import prospects from '../service/prospects.json'

const HomeProspects = () => {

    const [active, setActive] = useState(0)

    const handleActive = (index) => {
        setActive(index)
    }

    return (
        <div className='prosbects-block' id='industries'>
            <div className="container">
                <p className="title text-end">Возможности</p>
                <div className="prosp-menu">
                    <button
                        className={active === 0 ? 'pr-btn-active' : 'pr-button'}
                        onClick={() => handleActive(0)}
                    >
                        FoodTech
                    </button>
                    <button
                        className={active === 1 ? 'pr-btn-active' : 'pr-button'}
                        onClick={() => handleActive(1)}
                    >
                        EdTech
                    </button>
                    <button
                        className={active === 2 ? 'pr-btn-active' : 'pr-button'}
                        onClick={() => handleActive(2)}
                    >
                        Спорт и Здоровье
                    </button>
                    <button
                        className={active === 3 ? 'pr-btn-active' : 'pr-button'}
                        onClick={() => handleActive(3)}
                    >
                        eCommerce
                    </button>
                    <button
                        className={active === 4 ? 'pr-btn-active' : 'pr-button'}
                        onClick={() => handleActive(4)}
                    >
                        Транспорт и логистика
                    </button>
                    <button
                        className={active === 5 ? 'pr-btn-active' : 'pr-button'}
                        onClick={() => handleActive(5)}
                    >
                        Медиа и развлечения
                    </button>
                </div>

                <div className='pros-row'>
                    {/* <div className="col pros-col">
                        {
                            active === 0 ?
                                <FoodSvg />
                                : active === 1 ?
                                    <EdtechSvg />
                                    : active === 2 ?
                                        <HealthSvg />
                                        : active === 3 ?
                                            <MoneySvg />
                                            : active === 4 ?
                                                <PlaneSvg />
                                                : active === 5 ?
                                                    <MediaSvg />
                                                    : null
                        }
                    </div> */}
                    <div className="col pros-col">
                        {
                            prospects && prospects.find(item => item.id === active)?.text
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeProspects